export const FLIGHTS = [
  { id: 'FL-AA2401', airline: 'American', flightNo: 'AA2401', type: 'Arrival',   origin: 'JFK', dest: 'ATL', gate: 'B12', aircraft: 'B737-800', sched: '08:15', status: 'On Time',  turnaround: 45 },
  { id: 'FL-DL1129', airline: 'Delta',    flightNo: 'DL1129', type: 'Departure', origin: 'ATL', dest: 'LAX', gate: 'C04', aircraft: 'A321',     sched: '08:40', status: 'Boarding', turnaround: 38 },
  { id: 'FL-UA0788', airline: 'United',   flightNo: 'UA0788', type: 'Arrival',   origin: 'ORD', dest: 'ATL', gate: 'A09', aircraft: 'B777-300', sched: '09:05', status: 'Delayed',  turnaround: 60 },
  { id: 'FL-SW3340', airline: 'Southwest',flightNo: 'SW3340', type: 'Departure', origin: 'ATL', dest: 'DEN', gate: 'D17', aircraft: 'B737-700', sched: '09:25', status: 'On Time',  turnaround: 30 },
  { id: 'FL-LH0445', airline: 'Lufthansa',flightNo: 'LH0445', type: 'Arrival',   origin: 'FRA', dest: 'ATL', gate: 'E22', aircraft: 'A350-900', sched: '09:50', status: 'On Time',  turnaround: 75 },
  { id: 'FL-AF0689', airline: 'Air France',flightNo:'AF0689', type: 'Departure', origin: 'ATL', dest: 'CDG', gate: 'F08', aircraft: 'B787-9',  sched: '10:15', status: 'Boarding', turnaround: 55 },
  { id: 'FL-BA0227', airline: 'British',  flightNo: 'BA0227', type: 'Arrival',   origin: 'LHR', dest: 'ATL', gate: 'E18', aircraft: 'A380',     sched: '10:40', status: 'On Time',  turnaround: 90 },
  { id: 'FL-JL0061', airline: 'JAL',      flightNo: 'JL0061', type: 'Departure', origin: 'ATL', dest: 'NRT', gate: 'F12', aircraft: 'B777-300', sched: '11:20', status: 'Delayed',  turnaround: 80 },
]

export const CREW = [
  { id: 'C-1042', name: 'Marcus Whitfield', role: 'Ramp Supervisor',   shift: 'Day',    status: 'On Duty',  certs: ['Pushback', 'De-icing', 'HAZMAT'], phone: '+1 404-555-0142', assigned: 'AA2401' },
  { id: 'C-1043', name: 'Aisha Okonkwo',    role: 'Baggage Handler',   shift: 'Day',    status: 'On Duty',  certs: ['Belt Loader'],                    phone: '+1 404-555-0143', assigned: 'DL1129' },
  { id: 'C-1044', name: 'Diego Hernandez',  role: 'Fueler',            shift: 'Day',    status: 'Break',    certs: ['Fuel Truck', 'HAZMAT'],           phone: '+1 404-555-0144', assigned: 'UA0788' },
  { id: 'C-1045', name: 'Priya Raman',      role: 'Pushback Operator', shift: 'Day',    status: 'On Duty',  certs: ['Pushback', 'Tug Operations'],     phone: '+1 404-555-0145', assigned: 'SW3340' },
  { id: 'C-1046', name: 'Tom Sullivan',     role: 'Cabin Cleaner',     shift: 'Day',    status: 'On Duty',  certs: ['Cabin Service'],                  phone: '+1 404-555-0146', assigned: 'LH0445' },
  { id: 'C-1047', name: 'Yuki Tanaka',      role: 'Catering Loader',   shift: 'Day',    status: 'On Duty',  certs: ['Hi-Lift', 'Food Safety'],         phone: '+1 404-555-0147', assigned: 'AF0689' },
  { id: 'C-1048', name: 'Olivia Bennett',   role: 'Gate Agent',        shift: 'Day',    status: 'On Duty',  certs: ['Passenger Service'],              phone: '+1 404-555-0148', assigned: 'BA0227' },
  { id: 'C-1049', name: 'Karim Hassan',     role: 'De-icing Tech',     shift: 'Night',  status: 'Off Duty', certs: ['De-icing', 'HAZMAT'],             phone: '+1 404-555-0149', assigned: '—' },
  { id: 'C-1050', name: 'Elena Volkov',     role: 'Ramp Supervisor',   shift: 'Night',  status: 'Off Duty', certs: ['Pushback', 'HAZMAT', 'Marshalling'], phone: '+1 404-555-0150', assigned: '—' },
]

export const TASKS = [
  { id: 'T-9001', flight: 'AA2401', task: 'Chocks placement',     assignee: 'Marcus Whitfield', priority: 'High',   status: 'Done',        eta: '08:15' },
  { id: 'T-9002', flight: 'AA2401', task: 'Baggage offload',      assignee: 'Aisha Okonkwo',    priority: 'High',   status: 'In Progress', eta: '08:30' },
  { id: 'T-9003', flight: 'AA2401', task: 'Cabin cleaning',       assignee: 'Tom Sullivan',     priority: 'Medium', status: 'Pending',     eta: '08:45' },
  { id: 'T-9004', flight: 'DL1129', task: 'Refueling',            assignee: 'Diego Hernandez',  priority: 'High',   status: 'In Progress', eta: '08:35' },
  { id: 'T-9005', flight: 'DL1129', task: 'Catering load',        assignee: 'Yuki Tanaka',      priority: 'Medium', status: 'Done',        eta: '08:20' },
  { id: 'T-9006', flight: 'DL1129', task: 'Pushback prep',        assignee: 'Priya Raman',      priority: 'High',   status: 'Pending',     eta: '08:55' },
  { id: 'T-9007', flight: 'UA0788', task: 'De-icing',             assignee: 'Karim Hassan',     priority: 'High',   status: 'Pending',     eta: '09:30' },
  { id: 'T-9008', flight: 'SW3340', task: 'Boarding bridge dock', assignee: 'Olivia Bennett',   priority: 'Medium', status: 'Done',        eta: '09:00' },
  { id: 'T-9009', flight: 'LH0445', task: 'Cargo offload',        assignee: 'Aisha Okonkwo',    priority: 'High',   status: 'Pending',     eta: '10:05' },
  { id: 'T-9010', flight: 'AF0689', task: 'Final walkaround',     assignee: 'Marcus Whitfield', priority: 'High',   status: 'Pending',     eta: '10:25' },
]

export const EQUIPMENT = [
  { id: 'GSE-201', type: 'Pushback Tug',    model: 'TLD JET-16',    status: 'In Use',     location: 'Gate B12', operator: 'P. Raman',     fuel: 78, lastService: '2026-01-14' },
  { id: 'GSE-202', type: 'Belt Loader',     model: 'TUG 660',       status: 'In Use',     location: 'Gate C04', operator: 'A. Okonkwo',   fuel: 64, lastService: '2026-01-22' },
  { id: 'GSE-203', type: 'Fuel Truck',      model: 'Garsite F60',   status: 'In Use',     location: 'Gate A09', operator: 'D. Hernandez', fuel: 92, lastService: '2026-02-01' },
  { id: 'GSE-204', type: 'De-icing Truck',  model: 'Vestergaard',   status: 'Available',  location: 'Bay 3',    operator: '—',            fuel: 85, lastService: '2026-01-30' },
  { id: 'GSE-205', type: 'Catering Hi-Lift',model: 'Mallaghan CT6000',status: 'In Use',   location: 'Gate F08', operator: 'Y. Tanaka',    fuel: 71, lastService: '2026-01-18' },
  { id: 'GSE-206', type: 'Baggage Tractor', model: 'Charlatte T135',status: 'Available',  location: 'Pool 2',   operator: '—',            fuel: 88, lastService: '2026-01-26' },
  { id: 'GSE-207', type: 'GPU',             model: 'Hobart 90CU24', status: 'Maintenance',location: 'Workshop', operator: '—',            fuel: 0,  lastService: '2026-02-09' },
  { id: 'GSE-208', type: 'Air Start Unit',  model: 'TLD ASU-300',   status: 'Available',  location: 'Bay 1',    operator: '—',            fuel: 95, lastService: '2026-01-12' },
]

export const TURNAROUND_CHART = [
  { hr: '06:00', target: 45, actual: 42 },
  { hr: '07:00', target: 45, actual: 48 },
  { hr: '08:00', target: 45, actual: 44 },
  { hr: '09:00', target: 45, actual: 52 },
  { hr: '10:00', target: 45, actual: 47 },
  { hr: '11:00', target: 45, actual: 41 },
  { hr: '12:00', target: 45, actual: 46 },
  { hr: '13:00', target: 45, actual: 43 },
]

export const ALERTS = [
  { id: 'A1', level: 'critical', msg: 'GPU GSE-207 reported fault — workshop dispatch', time: '2m ago' },
  { id: 'A2', level: 'warning',  msg: 'UA0788 inbound delayed by 25 min — gate A09',     time: '6m ago' },
  { id: 'A3', level: 'info',     msg: 'Night shift roster confirmed for 22:00 handover', time: '14m ago' },
  { id: 'A4', level: 'warning',  msg: 'Fuel truck GSE-203 below 25% reserve threshold',  time: '21m ago' },
]

export const SHIFTS = ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00']
export const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
