// export as namespace functions

// export = RegisterCommand; export = SetEntityCoords

declare function RegisterCommand(commandName: string, handler: Function, restricted: boolean): void;

declare function SetEntityCoords(entity: any, xPos: number, yPos: number, zPos: number, alive: boolean, deadFlag: boolean, ragdollFlag: boolean, clearArea: boolean): void;

declare function GetVehiclePedIsIn(ped: any, lastVehicle: boolean): number;

declare function SetPedIntoVehicle(ped: any, vehicle: any, seatIndex: number): void;

declare function setImmediate(callback: Function): void;

declare function emit(event: string, p2?: any, p3?: any, p4?: any): void;

declare function on(event: string, callback: Function): void;

declare function GetHashKey(model: string): number;

declare function IsModelInCdimage(hashKey: number): boolean;

declare function IsModelAVehicle(hashKey: number): boolean;

declare function RequestModel(hashKey: number): void;

declare function HasModelLoaded(hashKey: number): boolean;

declare function PlayerPedId(): number;

declare function GetEntityCoords(entity: any): number;

declare function SetModelAsNoLongerNeeded(entity: any): void;

declare function SetEntityAsMissionEntity(entity: any, p2: boolean, p3: boolean): void;

declare function SetEntityAsNoLongerNeeded(entity: any): void;

declare function DeleteVehicle(vehicle: any): void;

declare function CreateVehicle(modelHash: number, x: number, y: number, z: number, heading: number, isNetwork: boolean, netMissionEntity: boolean): void;

declare function GetEntityHeading(entity: any): number;

declare function SetVehicleFixed(vehicle: any): void;

declare function SetVehicleEngineHealth(vehicle: any, health: number): void;

declare function SetVehicleEngineOn(vehicle: any, value: boolean, instantly: boolean, disableAutoStart: boolean): void;

declare function GetVehicleEngineHealth(vehicle: any): number;

declare function SetNotificationTextEntry(p1: string): void;

declare function AddTextComponentString(p1: string): void;

declare function DrawNotification(p1: boolean, p2: boolean): void;