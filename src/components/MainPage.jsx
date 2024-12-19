import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextInput } from "flowbite-react";
import { loginDrugMachine, insertIdCard, removeIdCard } from "../services";

const DrugEntryPage = () => {
    const navigate = useNavigate();
    const [idCardNumber, setIdCardNumber] = useState("");
    const [enterIdCardNumber, setEnterIdCardNumber] = useState(false);

    const handleInsertIdCard = async () => {
        try {
            const response = await insertIdCard(idCardNumber);
            setEnterIdCardNumber(true)
        } catch (error) {
            console.error(error);
        }
    };

    const handleRemoveIdCard = async () => {
        try {
            const result = await removeIdCard(idCardNumber);
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
                        ID CARD NUMBER
                    </div>
                    <TextInput
                        type="text"
                        placeholder="1111111111111"
                        value={idCardNumber}
                        disabled={enterIdCardNumber ? true : false}
                        onChange={(e) => setIdCardNumber(e.target.value)}
                    />
                    <Button
                        color="blue"
                        className="w-full flex items-center justify-center gap-2 mt-4"
                        onClick={handleInsertIdCard}
                        disabled={enterIdCardNumber ? true : false}
                    >
                        ใส่ ID CARD
                    </Button>
                    <Button
                        color="blue"
                        className="w-full flex items-center justify-center gap-2 mt-4"
                        onClick={handleRemoveIdCard}
                        disabled={enterIdCardNumber ? false : true}
                    >
                        ถอด ID CARD
                    </Button>
                </div>
            </div>

        </div>
    );
}

export default DrugEntryPage;