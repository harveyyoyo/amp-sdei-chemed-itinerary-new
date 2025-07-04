import { useState, useMemo, useEffect } from 'react';
import { ItineraryCard } from "@/components/ItineraryCard";
import { CalendarView } from "@/components/CalendarView";
import { itineraryData, ItineraryItem } from "@/data/itineraryData";
import { Button } from "@/components/ui/button";
import { Calendar, List, RefreshCw } from "lucide-react";
import { logActivitiesToFile } from "@/utils/activitiesLogger";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [view, setView] = useState<'timeline' | 'calendar'>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024 ? 'timeline' : 'calendar';
    }
    return 'calendar';
  });
  const [userHasManuallySelectedView, setUserHasManuallySelectedView] = useState(false);
  const [syncing, setSyncing] = useState(false);

  // Always use local backup data (which gets updated by sync)
  const items = itineraryData;

  // Helper function to normalize dates for comparison (consistent with CalendarView)
  const normalizeDate = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  };

  const today = normalizeDate(new Date());

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 1024;
      const newView = isMobile ? 'timeline' : 'calendar';
      if (!userHasManuallySelectedView && view !== newView) {
        setView(newView);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [view, userHasManuallySelectedView]);

  const handleViewToggle = (newView: 'timeline' | 'calendar') => {
    setView(newView);
    setUserHasManuallySelectedView(true);
  };

  const handleUpdateItem = (id: string, updates: Partial<ItineraryItem>) => {
    console.log('Update requested for local item:', id, updates);
  };

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = activeFilter === 'all' || item.type === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, activeFilter, items]);

  const groupedItems = useMemo(() => {
    const groups: Record<string, typeof filteredItems> = {};
    filteredItems.forEach(item => {
      const monthYear = item.fullDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
      if (!groups[monthYear]) {
        groups[monthYear] = [];
      }
      groups[monthYear].push(item);
    });
    Object.keys(groups).forEach(key => {
      groups[key].sort((a, b) => a.fullDate.getTime() - b.fullDate.getTime());
    });
    return groups;
  }, [filteredItems]);

  const groupedByDate = useMemo(() => {
    const map = new Map<string, ItineraryItem[]>();
    filteredItems.forEach(item => {
      const dateKey = item.fullDate.toLocaleDateString('en-US', {
        weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
      });
      if (!map.has(dateKey)) {
        map.set(dateKey, []);
      }
      map.get(dateKey)!.push(item);
    });
    map.forEach(group => group.sort((a, b) => a.fullDate.getTime() - b.fullDate.getTime()));
    return Array.from(map.entries()).sort(
      ([a], [b]) => new Date(a).getTime() - new Date(b).getTime()
    );
  }, [filteredItems]);

  useEffect(() => {
    if (items.length > 0) {
      logActivitiesToFile(items);
    }
  }, [items]);

  // Sync button handler
  const handleSync = async () => {
    setSyncing(true);
    try {
      // Determine the correct sync server URL based on current location
      const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      const isLocalNetwork = window.location.hostname === '192.168.1.208';
      const isExternalIP = window.location.hostname === '70.18.54.222';
      
      let syncServerUrl;
      if (isLocalhost) {
        syncServerUrl = 'http://localhost:3001';
      } else if (isLocalNetwork) {
        syncServerUrl = 'http://192.168.1.208:3001';
      } else if (isExternalIP) {
        syncServerUrl = 'http://70.18.54.222:3001';
      } else {
        // Fallback to localhost for any other cases
        syncServerUrl = 'http://localhost:3001';
      }
      
      // Try to use the sync server first
      try {
        console.log('🔄 Attempting to connect to sync server...');
        const response = await fetch(`${syncServerUrl}/api/sync-calendar`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        console.log('📡 Sync server response status:', response.status);
        
        if (response.ok) {
          const result = await response.json();
          console.log('✅ Sync server result:', result);
          if (result.success) {
            // Reload the page to show updated data
            window.location.reload();
            return;
          }
        } else {
          console.error('❌ Sync server error status:', response.status);
        }
      } catch (serverError) {
        console.error('❌ Sync server connection error:', serverError);
        console.log('Sync server not available, falling back to direct sync');
      }
      
      // Fallback to direct sync if server is not available
      alert('Sync server is not running. Please start the sync server by running "node sync-server.js" in the terminal to sync calendar data that all users can see.');
      return;
      
    } catch (error) {
      console.error('Sync error:', error);
      alert('Sync failed: ' + error.message);
    } finally {
      setSyncing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Top Navigation Bar */}
      <header className="flex flex-col sm:flex-row h-auto sm:h-16 shrink-0 items-start sm:items-center gap-2 sm:gap-4 border-b bg-white/80 backdrop-blur-sm px-3 sm:px-6 py-3 sm:py-0">
        <div className="flex-1 w-full sm:w-auto">
          <h1 className="text-base sm:text-lg font-semibold text-gray-800">
            Camp Sdei Chemed - Boys 2025
          </h1>
        </div>
        {/* Sync Button */}
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          <Button 
            size="sm" 
            variant="outline" 
            onClick={handleSync} 
            disabled={syncing}
            className="flex items-center gap-1 text-xs"
          >
            <RefreshCw className={`w-4 h-4 ${syncing ? 'animate-spin' : ''}`} />
            <span>{syncing ? 'Syncing...' : 'Sync Calendar'}</span>
          </Button>
          {/* Mobile View Toggle */}
          <div className="flex lg:hidden items-center gap-1 bg-gray-100 rounded-lg p-1">
            <Button
              size="sm"
              variant={view === 'timeline' ? 'default' : 'ghost'}
              onClick={() => handleViewToggle('timeline')}
              className="flex items-center gap-1 text-xs"
            >
              <List className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Timeline</span>
            </Button>
            <Button
              size="sm"
              variant={view === 'calendar' ? 'default' : 'ghost'}
              onClick={() => handleViewToggle('calendar')}
              className="flex items-center gap-1 text-xs"
            >
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Calendar</span>
            </Button>
          </div>
          {/* Desktop View Toggle */}
          <div className="hidden lg:flex items-center gap-1 bg-gray-100 rounded-lg p-1">
            <Button
              size="sm"
              variant={view === 'calendar' ? 'default' : 'ghost'}
              onClick={() => {
                setView('calendar');
                setUserHasManuallySelectedView(true);
              }}
              className="flex items-center gap-1 text-xs"
            >
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Calendar</span>
              <span className="sm:hidden">📅</span>
            </Button>
            <Button
              size="sm"
              variant={view === 'timeline' ? 'default' : 'ghost'}
              onClick={() => {
                setView('timeline');
                setUserHasManuallySelectedView(true);
              }}
              className="flex items-center gap-1 text-xs"
            >
              <List className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Timeline</span>
              <span className="sm:hidden">📋</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        {/* Responsive View Display */}
        <>
          {/* Mobile: Show Timeline by default, Calendar if manually selected */}
          <div className="block lg:hidden">
            {view === 'calendar' ? (
              <CalendarView items={filteredItems} onUpdateItem={handleUpdateItem} />
            ) : (
              <div className="px-3 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8 md:space-y-12">
                {groupedByDate.map(([dateKey, dateItems]) => (
                  <div key={dateKey}>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6 text-center">
                      {dateKey}
                    </h2>
                    <div className="grid gap-2 sm:gap-3 md:gap-6">
                      {dateItems.map(item => {
                        const itemDate = normalizeDate(item.fullDate);
                        const isPast = itemDate < today;
                        const isToday = itemDate.getTime() === today.getTime();
                        return (
                          <ItineraryCard
                            key={item.id}
                            item={item}
                            isPast={isPast}
                            isToday={isToday}
                            onUpdateItem={handleUpdateItem}
                            hideDate={true}
                          />
                        );
                      })}
                    </div>
                  </div>
                ))}
                {filteredItems.length === 0 && (
                  <div className="text-center py-8 sm:py-12">
                    <div className="text-3xl sm:text-4xl md:text-6xl mb-4">🔍</div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-600 mb-2">
                      No activities found
                    </h3>
                    <p className="text-sm md:text-base text-gray-500">
                      Try adjusting your search or filter criteria
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
          {/* Desktop: Show Calendar or Timeline based on view state */}
          <div className="hidden lg:block">
            {view === 'calendar' ? (
              <CalendarView items={filteredItems} onUpdateItem={handleUpdateItem} />
            ) : (
              <div className="px-6 py-8 space-y-8 md:space-y-12">
                {groupedByDate.map(([dateKey, dateItems]) => (
                  <div key={dateKey}>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
                      {dateKey}
                    </h2>
                    <div className="grid gap-3 md:gap-6">
                      {dateItems.map(item => {
                        const itemDate = normalizeDate(item.fullDate);
                        const isPast = itemDate < today;
                        const isToday = itemDate.getTime() === today.getTime();
                        return (
                          <ItineraryCard
                            key={item.id}
                            item={item}
                            isPast={isPast}
                            isToday={isToday}
                            onUpdateItem={handleUpdateItem}
                            hideDate={true}
                          />
                        );
                      })}
                    </div>
                  </div>
                ))}
                {filteredItems.length === 0 && (
                  <div className="text-center py-12">
                    <div className="text-4xl md:text-6xl mb-4">🔍</div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-600 mb-2">
                      No activities found
                    </h3>
                    <p className="text-sm md:text-base text-gray-500">
                      Try adjusting your search or filter criteria
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </>
      </main>
    </div>
  );
};

export default Index;
