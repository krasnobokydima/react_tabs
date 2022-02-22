import React, { useState } from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface Tab {
  id: string;
  title: string;
  content: string;
}

const App: React.FC = () => {
  const [selectedTab, changeTab] = useState(tabs[0].id);

  const changer = (value: Tab | null) => {
    if (value !== null) {
      changeTab(value.id);
    }
  };

  return (
    <div className="App">
      <h1>{`Selected tab is: ${selectedTab}`}</h1>
      <Tabs
        selectedTab={selectedTab}
        tabs={tabs}
        changer={changer}
      />
    </div>
  );
};

export default App;
