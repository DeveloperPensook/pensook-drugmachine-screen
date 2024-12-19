import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextInput } from "flowbite-react";
import { loginDrugMachine } from "../services";

const LoginPage = () => {
    const navigate = useNavigate();
    const [drugMachineCode, setDrugMachineCode] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/main");
        }
    }, [navigate]);

    const handleLogin = async () => {
        try {
            const response = await loginDrugMachine(drugMachineCode, password);
            if (!localStorage.getItem("token")) {
                localStorage.setItem("token", response.result.token);
            }
            if (!localStorage.getItem("drugMachine")) {
                localStorage.setItem("drugMachine", response.result.drugMachine);
            }
            if (!localStorage.getItem("drugMachineCode")) {
                localStorage.setItem("drugMachineCode", response.result.drugMachineCode);
            }
            navigate("/main");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <div className="flex flex-col items-center justify-center mt-10">
                <div className="w-full max-w-[900px] bg-white rounded-lg border border-gray-100 p-3">
                    <div className="mb-4">
                        Drug Machine Code
                    </div>
                    <TextInput
                        type="text"
                        placeholder="DM001"
                        value={drugMachineCode}
                        onChange={(e) => setDrugMachineCode(e.target.value)}
                        required
                    />
                    <div className="mb-4 mt-4">
                        Password
                    </div>
                    <TextInput
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className="grid grid-cols-1 gap-3 mt-8">
                        <Button
                            color="blue"
                            className="w-full flex items-center justify-center gap-2"
                            onClick={handleLogin}
                        >
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;