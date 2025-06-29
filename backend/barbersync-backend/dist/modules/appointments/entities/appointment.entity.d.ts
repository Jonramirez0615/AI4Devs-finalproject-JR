import { AppointmentStatus } from '../../../common/enums/appointment-status.enum';
import { User } from '../../users/entities/user.entity';
import { Barbershop } from '../../barbershops/entities/barbershop.entity';
export declare class Appointment {
    id: string;
    appointmentDate: Date;
    startTime: string;
    endTime: string;
    status: AppointmentStatus;
    service_id: string;
    serviceName: string;
    price: number;
    durationMinutes: number;
    clientNotes: string;
    barberNotes: string;
    adminNotes: string;
    confirmedAt: Date;
    startedAt: Date;
    completedAt: Date;
    cancelledAt: Date;
    client: User;
    client_id: string;
    barber: User;
    barber_id: string;
    barbershop: Barbershop;
    barbershop_id: string;
    createdAt: Date;
    updatedAt: Date;
    get serviceDescription(): string;
    set serviceDescription(value: string);
    get notes(): string;
    set notes(value: string);
}
