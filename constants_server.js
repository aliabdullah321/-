// This is a CommonJS version of constants for the server
const Role = {
    Manager: 'Manager',
    Reception: 'Reception',
    Nurse: 'Nurse',
    Doctor: 'Doctor',
    ER_Specialist: 'ER_Specialist',
    Pharmacist: 'Pharmacist',
    Technician: 'Technician',
    Dentist: 'Dentist',
    Lab: 'Lab',
    Radiology: 'Radiology'
};

const Permission = {
    GiveSickLeave: 'GIVE_SICK_LEAVE',
    DoReferral: 'DO_REFERRAL',
    AdministerVaccine: 'ADMINISTER_VACCINE',
    PerformProcedures: 'PERFORM_PROCEDURES',
};

const RestType = {
    BedRest: 'BedRest',
    NoShoes: 'NoShoes',
    NoWorkout: 'NoWorkout',
    GeneralRest: 'GeneralRest',
};

const USERS = [
    { id: 1, name: 'Doctor', role: Role.Doctor, password: '123', permissions: [Permission.GiveSickLeave, Permission.DoReferral, Permission.AdministerVaccine, Permission.PerformProcedures] },
    { id: 2, name: 'Nurse', role: Role.Nurse, password: '123', permissions: [Permission.AdministerVaccine, Permission.PerformProcedures] },
    { id: 3, name: 'Reception', role: Role.Reception, password: '123', permissions: [] },
    { id: 4, name: 'Manager', role: Role.Manager, password: '123', permissions: [] },
    { id: 5, name: 'Pharmacist', role: Role.Pharmacist, password: '123', permissions: [] },
    { id: 6, name: 'ER_Specialist', role: Role.ER_Specialist, password: '123', permissions: [Permission.GiveSickLeave, Permission.DoReferral, Permission.PerformProcedures]},
    { id: 7, name: 'Technician', role: Role.Technician, password: '123', permissions: [Permission.PerformProcedures]},
    { id: 8, name: 'Dentist', role: Role.Dentist, password: '123', permissions: [Permission.GiveSickLeave, Permission.DoReferral, Permission.PerformProcedures]},
    { id: 9, name: 'Lab', role: Role.Lab, password: '123', permissions: [Permission.PerformProcedures] },
    { id: 10, name: 'Radiology', role: Role.Radiology, password: '123', permissions: [Permission.PerformProcedures] }
];

const MOCK_PATIENTS = [
    {
        id: 'P001', name: 'Khalid Al-Fahad', age: 34, idNumber: '1098765432', phone: '0501234567', registrationDate: '2023-10-01', allergies: ['Penicillin'], pretendedSickCount: 0,
        visits: [
            {
                id: 'V001-1', date: '2023-10-26', status: 'completed', consentSigned: true,
                vitals: { date: '2023-10-26', height: 175, weight: 80, temperature: 37.2, bloodPressure: '120/80', heartRate: 75, respiratoryRate: 16, recordedBy: 'Nurse' },
                diagnosis: 'Common Cold',
                procedures: [{ name: 'IV Saline Drip', performedById: 2, performedDate: '2023-10-26T14:00:00Z' }],
                prescription: { items: [{ medication: 'Panadol Cold & Flu', dosage: '2 tablets', frequency: '3 times a day', duration: '5 days'}, { medication: 'Amoxicillin', dosage: '500mg', frequency: '2 times a day', duration: '7 days'}], issuedBy: 'Doctor', date: '2023-10-26', isDispensed: true, dispensedById: 5, dispensedDate: '2023-10-26T14:30:00Z' },
                soapNotes: { subjective: ['Cough', 'Runny nose'], objective: ['Mild fever', 'Red throat'], assessment: ['Viral upper respiratory infection.'], plan: ['Advised rest', 'Increase fluid intake'], notes: 'Patient complains of symptoms for 3 days. Re-evaluate in 3-5 days if no improvement.' },
                vaccines: [{ name: 'Influenza Shot', dose: '2023 annual' }],
                seenBy: { nurseId: 2, doctorId: 1 }
            }
        ]
    },
];

const INITIAL_DIAGNOSES = ['Common Cold', 'Influenza', 'Allergic Rhinitis', 'Gastroenteritis', 'Migraine', 'Hypertension'];
const INITIAL_MEDICATIONS = ['Panadol', 'Amoxicillin', 'Loratadine', 'Omeprazole', 'Ibuprofen', 'Metformin', 'Panadol Cold & Flu'];
const INITIAL_ALLERGIES = ['Penicillin', 'Sulfa drugs', 'Aspirin', 'Nuts', 'Shellfish', 'Pollen'];
const INITIAL_VACCINES = ['BCG', 'Hepatitis B', 'Polio', 'MMR', 'Influenza Shot', 'COVID-19 Vaccine'];
const INITIAL_PROCEDURES = ['Oxygen Supply', 'IV Injection', 'Suturing', 'Wound Dressing', 'IV Saline Drip'];
const INITIAL_SOAP_SUBJECTIVE = ['Headache', 'Fever', 'Cough', 'Sore throat', 'Nausea', 'Vomiting', 'Dizziness', 'Runny nose', 'High fever', 'Muscle aches', 'Fatigue'];
const INITIAL_SOAP_OBJECTIVE = ['Temperature: 38.5°C', 'BP: 120/80 mmHg', 'HR: 80 bpm', 'Red throat', 'Lungs clear', 'Mild fever', 'Appears lethargic.'];
const INITIAL_SOAP_ASSESSMENT = ['Common Cold', 'Influenza', 'Gastroenteritis', 'Migraine', 'Viral upper respiratory infection.'];
const INITIAL_SOAP_PLAN = ['Advised rest', 'Increase fluid intake', 'Prescribed medication', 'Follow up in 3 days', 'Advised bed rest and hydration.'];
const INITIAL_DENTAL_DIAGNOSES = ['Caries', 'Gingivitis', 'Periodontitis', 'Abscess', 'Wisdom Tooth Pain'];
const INITIAL_LAB_TESTS = ['CBC', 'Lipid Profile', 'HbA1c', 'LFT', 'KFT', 'Urine Analysis'];
const INITIAL_RADIOLOGY_ORDERS = ['Chest X-Ray', 'Dental X-Ray', 'Abdominal X-Ray', 'Limb X-Ray'];

module.exports = {
    USERS, MOCK_PATIENTS,
    INITIAL_DIAGNOSES, INITIAL_MEDICATIONS, INITIAL_ALLERGIES, INITIAL_VACCINES, INITIAL_PROCEDURES,
    INITIAL_SOAP_SUBJECTIVE, INITIAL_SOAP_OBJECTIVE, INITIAL_SOAP_ASSESSMENT, INITIAL_SOAP_PLAN,
    INITIAL_DENTAL_DIAGNOSES, INITIAL_LAB_TESTS, INITIAL_RADIOLOGY_ORDERS
};