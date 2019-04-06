import React from 'react';
import ExpenseListFilters from './ExpenseListFilters';
import LocationList from './LocationList';

const ExpenseDashboardPage = () => (
  <div className="content">
    {/* <ExpensesSummary /> */}
    <ExpenseListFilters />
    <LocationList />
  </div>
);

export default ExpenseDashboardPage;
