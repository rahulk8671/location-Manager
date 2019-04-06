

// Get filtered location

export default (locations, { text, sortBy}) => {
  return locations.filter((location) => {
    //const createdAtMoment = moment(expense.createdAt);
    //const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    //const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    if(sortBy === 'Name') {
        const textMatch = location.locationName.toLowerCase().includes(text.toLowerCase());
        // const open = location.closureDate !== null ? false : true;
        return textMatch && open;
    } else if(sortBy === 'leased') {
        const textMatch = location.leasedCircuitId.toLowerCase().includes(text.toLowerCase());
        return textMatch
    }
    //return startDateMatch && endDateMatch && textMatch;
  })
};

// export default (expenses, { text, sortBy, startDate, endDate }) => {
//     return expenses.filter((expense) => {
//       const createdAtMoment = moment(expense.createdAt);
//       const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
//       const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
//       const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
  
//       return startDateMatch && endDateMatch && textMatch;
//     }).sort((a, b) => {
//       if (sortBy === 'date') {
//         return a.createdAt < b.createdAt ? 1 : -1;
//       } else if (sortBy === 'amount') {
//         return a.amount < b.amount ? 1 : -1;
//       }
//     });
//   };
  