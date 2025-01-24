import React from "react";

export type InputTypes = {
    placeholder: string,
    type: string,
    value?: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>

}