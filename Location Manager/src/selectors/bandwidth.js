

// Get bandwidth whose status is true

export default (bandwidth, leasedCircuitId) => {
  return bandwidth.filter((band) => {
      return band.leasedCircuitId === leasedCircuitId && band.status === true;
    //const createdAtMoment = moment(expense.createdAt);
    //const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    //const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    //const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

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
