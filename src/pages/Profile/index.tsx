import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Profile: React.FC = () => {
    const name = "John";
    const surname = "Doe";
    const email = "jaurbani@ucasal.edu.ar";
    const dni = "12345678";
    const phone = "12345678";

    return (
        <div className="flex justify-center items-center w-full h-full bg-gray-100 min-h-screen">
            <Card className="w-full h-full">
                <CardHeader>
                    <div className="flex flex-col items-center">
                        <img className="h-24 w-24 rounded-full border-4 border-white" src="https://placehold.co/100x100" alt="Profile Picture" />
                        <CardTitle>{name} {surname}</CardTitle>
                        <CardDescription>{email}</CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Nombre</Label>
                                <Input id="name" defaultValue={name ?? ""} readOnly disabled />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="surname">Apellido</Label>
                                <Input id="surname" defaultValue={surname ?? ""} readOnly disabled />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" defaultValue={email ?? ""} readOnly disabled />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="dni">DNI</Label>
                                <Input id="dni" defaultValue={dni ?? ""} readOnly disabled />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="phone">Teléfono</Label>
                                <Input id="phone" defaultValue={phone ?? ""} readOnly disabled />
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};
export default Profile;