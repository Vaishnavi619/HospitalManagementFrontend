import { Routes } from '@angular/router';
import { PatientComponent } from './components/patient/patient.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { PrescriptionComponent } from './components/prescription/prescription.component';
import { PrescriptionItemComponent } from './components/prescription-item/prescription-item.component';
import { BillComponent } from './components/bill/bill.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { DoctorListComponent } from './admin/doctor-list/doctor-list.component';
import { ScheduleAppointmentComponent } from './components/appointments/schedule-appointment/schedule-appointment.component';
import { ViewAppointmentComponent } from './components/appointments/view-appointments/view-appointments.component';
import { RegisterPatientComponent } from './components/patients/register-patient/register-patient.component';
import { ViewPatientsComponent } from './components/patients/view-patients/view-patients.component';
import { UpdatePatientComponent } from './components/patients/update-patient/update-patient.component';
import { UpdateAppointmentComponent } from './components/appointments/update-appointment/update-appointment.component';
import { ViewAppointmentsComponent } from './components/doctor/view-appointments/view-appointments.component';
import { CreatePrescriptionComponent } from './doctor/prescriptions/create-prescription/create-prescription.component';
import { ViewPrescriptionsComponent } from './doctor/prescriptions/view-prescriptions/view-prescriptions.component';
import { UpdatePrescriptionComponent } from './doctor/prescriptions/update-prescription/update-prescription.component';
import { DoctorDashboardComponent } from './admin/doctor-dashboard/doctor-dashboard.component';
import { RegisterDoctorComponent } from './admin/register-doctor/register-doctor.component';
import { ViewDoctorsComponent } from './admin/view-doctors/view-doctors.component';
import { UpdateDoctorComponent } from './admin/update-doctor/update-doctor.component';
import { MedicineDashboardComponent } from './admin/medicine-dashboard/medicine-dashboard.component';
import { AddMedicineComponent } from './admin/add-medicine/add-medicine.component';
import { ViewMedicinesComponent } from './admin/view-medicines/view-medicines.component';
import { UpdateMedicineComponent } from './admin/update-medicine/update-medicine.component';




export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'patients', component: PatientComponent },
  {path:'doctors',component:DoctorComponent},
  { path: 'medicines', component: MedicineComponent },
   { path: 'appointments', component: AppointmentComponent },
   {path:'prescriptions', component:PrescriptionComponent},
   {path:'prescriptionItems',component:PrescriptionItemComponent},  
   { path: 'bills', component: BillComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
     { path: 'dashboard', component: DashboardComponent },
      { path: 'admin/dashboard', component: AdminDashboardComponent },
      { path: 'admin/doctor-list', component: DoctorListComponent },
      { path: 'appointments/schedule', component: ScheduleAppointmentComponent },
  { path: 'appointments/view', component: ViewAppointmentComponent },
   { path: 'register-patient', component: RegisterPatientComponent },
  { path: 'view-patients', component: ViewPatientsComponent },
  { path: 'update-patient/:id',component: UpdatePatientComponent },
  { path: 'update-appointment/:id', component:UpdateAppointmentComponent},
  { path: 'doctor/view-appointments', component: ViewAppointmentsComponent },
  { path: 'doctor/prescriptions',component: PrescriptionComponent},
{path: 'doctor/prescriptions/create',component: CreatePrescriptionComponent},
{ path: 'doctor/prescriptions/view',component: ViewPrescriptionsComponent},
{path: 'doctor/prescriptions/update/:prescriptionId',component: UpdatePrescriptionComponent},
{ path: 'admin/doctor-dashboard',component: DoctorDashboardComponent},
{path: 'admin/register-doctor',component: RegisterDoctorComponent},
{ path: 'admin/view-doctors',component: ViewDoctorsComponent},
{path: 'admin/update-doctor/:doctorId',component: UpdateDoctorComponent},
{ path: 'admin/medicine-dashboard',component: MedicineDashboardComponent,title: 'Medicine Dashboard'},
{path: 'admin/add-medicine',component: AddMedicineComponent,title: 'Add Medicine'},
{path: 'admin/view-medicines',component: ViewMedicinesComponent,title: 'View Medicines'},
{path: 'admin/update-medicine/:medicineId',component: UpdateMedicineComponent,title: 'Update Medicine'}






];
