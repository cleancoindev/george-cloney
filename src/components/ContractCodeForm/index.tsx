import React, { ReactElement } from "react";
import { ContractFormProps } from "./types";
import Select from "react-select";
import { useForm } from "react-hook-form";
import "./styles.css";

const ContractForm = (props: ContractFormProps): ReactElement | null => {
  const { handleNetworkChange, network, updateContractAddress, handleContractSubmit, loading, currentStep } = props;
  const { register, handleSubmit } = useForm();

  const selectValue = { value: network, label: network.charAt(0).toUpperCase() + network.slice(1) };
  const options = [
    { value: "mainnet", label: "Mainnet" },
    { value: "carthagenet", label: "Carthagenet" },
    { value: "sandbox", label: "Sandbox" },
  ];

  console.log(network);

  const handleChange = (selectedOption: any) => {
    handleNetworkChange(selectedOption.value);
  };

  if (currentStep !== 1) return null;
  return (
    <>
      <div id="dialog">
        <h2>Get Contract Code</h2>
        <Select className="network-select" options={options} value={selectValue} onChange={handleChange} />
        <div id="content">
          <div id="contract-code-form">
            <form onSubmit={handleSubmit(handleContractSubmit)}>
              <input
                onChange={updateContractAddress}
                placeholder="Contract Address"
                id="address-input"
                name="address"
                ref={register}
              />
              <br />
              {!loading && <input id="show-balance-button" type="submit" />}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContractForm;
