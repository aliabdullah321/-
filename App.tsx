
import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { UserProvider } from './contexts/UserContext';
import { NotificationProvider } from './contexts/NotificationContext';
import { AuditLogProvider } from './contexts/AuditLogContext';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { PatientProvider } from './contexts/PatientContext';
import { SettingsProvider } from './contexts/SettingsContext';
import Login from './components/Login';
import Layout from './components/Layout';
import Dashboard, { AuditLogView } from './components/Dashboard';
import PatientList from './components/PatientList';
import PatientFile from './components/PatientFile';
import UserManagement from './components/UserManagement';
import Settings from './components/Settings';

export type View = 'dashboard' | 'patients' | 'patientFile' | 'users' | 'settings' | 'auditLog';

const AppContent: React.FC = () => {
    const { currentUser } = useAuth();
    const { language, dir } = useLanguage();
    const [view, setView] = useState<View>('dashboard');
    const [activePatientId, setActivePatientId] = useState<string | null>(null);
    const [activeVisitId, setActiveVisitId] = useState<string | null>(null);

    const navigateToPatient = (patientId: string, visitId?: string) => {
        setActivePatientId(patientId);
        setActiveVisitId(visitId || null);
        setView('patientFile');
    };

    const renderView = () => {
        switch (view) {
            case 'dashboard':
                return <Dashboard />;
            case 'patients':
                return <PatientList onSelectPatient={navigateToPatient} />;
            case 'patientFile':
                return activePatientId ? <PatientFile patientId={activePatientId} onBack={() => setView('patients')} expandedVisitIdProp={activeVisitId} /> : <PatientList onSelectPatient={navigateToPatient} />;
            case 'users':
                return <UserManagement />;
            case 'settings':
                return <Settings />;
            case 'auditLog':
                return <AuditLogView />;
            default:
                return <Dashboard />;
        }
    };

    if (!currentUser) {
        return <Login />;
    }

    return (
        <div dir={dir} className={`bg-slate-900 text-slate-200 min-h-screen font-sans ${language === 'ar' ? 'font-[Cairo,sans-serif]' : ''}`}>
            <Layout view={view} setView={setView} navigateToPatient={navigateToPatient}>
                {renderView()}
            </Layout>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <LanguageProvider>
            <UserProvider>
                <AuditLogProvider>
                    <NotificationProvider>
                        <AuthProvider>
                            <SettingsProvider>
                                <PatientProvider>
                                    <AppContent />
                                </PatientProvider>
                            </SettingsProvider>
                        </AuthProvider>
                    </NotificationProvider>
                </AuditLogProvider>
            </UserProvider>
        </LanguageProvider>
    );
};

export default App;