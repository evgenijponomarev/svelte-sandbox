// const alarms = [
//   {
//     id: 1,
//     time: '08:00',
//     repeat: 'workdays',
//   },
//   {
//     id: 2,
//     time: '08:05',
//     repeat: 'workdays',
//   },
//   {
//     id: 3,
//     time: '08:10',
//     repeat: 'workdays',
//   },
//   {
//     id: 4,
//     time: '08:15',
//     repeat: 'workdays',
//   },
//   {
//     id: 5,
//     time: '08:20',
//     repeat: 'workdays',
//   },
//   {
//     id: 6,
//     time: '10:00',
//     repeat: 'weekends',
//   },
// ];

const alarms = [...Array(10)].map((v,k) => ({
  id: k,
  time: '08:00',
  repeat: 'workdays',
}));

export default alarms;
