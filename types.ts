export enum Role {
    Manager = 'Manager',
    Reception = 'Reception',
    Nurse = 'Nurse',
    Doctor = 'Doctor',
    ER_Specialist = 'ER_Specialist',
    Pharmacist = 'Pharmacist',
    Technician = 'Technician',
    Dentist = 'Dentist',
    Lab = 'Lab',
    Radiology = 'Radiology'
}

export enum Permission {
    GiveSickLeave = 'GIVE_SICK_LEAVE',
    DoReferral = 'DO_REFERRAL',
    AdministerVaccine = 'ADMINISTER_VACCINE',
    PerformProcedures = 'PERFORM_PROCEDURES',
}

export interface User {
    id: number;
    name: string;
    role: Role;
    password?: string;
    permissions: Permission[];
}

export interface Vitals {
    date: string;
    height: number;
    weight: number;
    temperature: number;
    bloodPressure: string;
    heartRate: number;
    respiratoryRate: number;
    recordedBy: string;
}

export enum RestType {
    BedRest = 'BedRest',
    NoShoes = 'NoShoes',
    NoWorkout = 'NoWorkout',
    GeneralRest = 'GeneralRest',
}

export interface SickLeave {
    days: number;
    reason: string;
    restType: RestType;
    issuedBy: string;
    date: string;
    printedById?: number;
    printedDate?: string;
}

export interface PrescriptionItem {
    medication: string;
    dosage: string;
    frequency: string;
    duration: string;
}

export interface Prescription {
    items: PrescriptionItem[];
    issuedBy: string;
    date: string;
    isDispensed: boolean;
    dispensedById?: number;
    dispensedDate?: string;
}

export interface Referral {
    to: string;
    reason: string;
    issuedBy: string;
    date: string;
    patientId: string;
    printedById?: number;
    printedDate?: string;
}

export interface Vaccine {
    name: string;
    dose: string;
}

export interface PerformedProcedure {
    name: string;
    performedById?: number;
    performedDate?: string;
}

export interface LabTestOrder {
    name: string;
    performedById?: number;
    performedDate?: string;
    resultImageUrl?: string; // Base64 string
}

export interface RadiologyOrder {
    name: string;
    performedById?: number;
    performedDate?: string;
    imageUrl?: string; // Base64 string
}

export interface SOAPNotes {
    subjective: string[];
    objective: string[];
    assessment: string[];
    plan: string[];
    notes?: string;
}

export interface Visit {
    id: string;
    date: string;
    status: 'active' | 'completed';
    vitals?: Vitals;
    diagnosis?: string;
    procedures?: PerformedProcedure[];
    prescription?: Prescription;
    sickLeave?: SickLeave;
    referral?: Referral;
    allergies?: string[];
    vaccines?: Vaccine[];
    isPretending?: boolean;
    soapNotes?: SOAPNotes;
    dentalDiagnosis?: string;
    dentalNotes?: string;
    labTests?: LabTestOrder[];
    radiologyOrders?: RadiologyOrder[];
    nurseNotes?: string;
    consentSigned: boolean;
    seenBy: {
        nurseId?: number;
        doctorId?: number;
    };
}

export interface Patient {
    id: string;
    name: string;
    age: number;
    idNumber: string;
    phone?: string;
    registrationDate: string;
    allergies: string[];
    visits: Visit[];
    pretendedSickCount: number;
}

export interface Notification {
    id: string;
    message: string;
    patientId: string;
    visitId?: string; // So notifications can link to a specific visit
    targetRoles: Role[];
    createdAt: string;
    readBy: number[]; // Array of user IDs who have read it
}

export interface AuditLog {
    id: string;
    timestamp: string;
    userId: number;
    userName: string;
    action: string;
    details: string;
}

export type Language = 'en' | 'ar';