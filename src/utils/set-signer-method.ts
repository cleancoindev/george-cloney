import { HttpBackend } from "@taquito/http-utils";
import { RemoteSigner } from "@taquito/remote-signer";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { TezBridgeWallet } from "@taquito/tezbridge-wallet";
import { Tezos } from "@taquito/taquito";
import { MichelsonV1Expression } from "@taquito/rpc";
import { Dispatch, SetStateAction } from "react";

export enum NetworkType {
  MAINNET = "mainnet",
  CARTHAGENET = "carthagenet",
  CUSTOM = "custom",
}

const setSignerMethod = async (
  signer: string,
  contractNetwork: string,
  launchNetwork: string,
  code?: any,
  storage?: any,
  setLoading?: Dispatch<SetStateAction<boolean>>,
  showSnackbar?: Dispatch<SetStateAction<boolean>>,
  setLoadingMessage?: Dispatch<SetStateAction<string>>,
  setTxnAddress?: Dispatch<SetStateAction<string>>,
  handleError?: (error: any) => void
) => {
  switch (signer) {
    case "ephemeral":
      try {
        const httpClient = new HttpBackend();
        const { id, pkh } = await httpClient.createRequest({
          url: `https://api.tez.ie/keys/carthagenet/ephemeral`,
          method: "POST",
          headers: { Authorization: "Bearer taquito-example" },
        });
        const signer = new RemoteSigner(pkh, `https://api.tez.ie/keys/carthagenet/ephemeral/${id}/`, {
          headers: { Authorization: "Bearer taquito-example" },
        });
        await Tezos.setSignerProvider(signer);
      } catch (e) {
        handleError && handleError(e.message);
      }
      break;

    case "tezbridge":
      Tezos.setProvider({
        rpc: `${
          launchNetwork.includes("http")
            ? launchNetwork
            : `https://api.tez.ie/keys/${launchNetwork ? launchNetwork : contractNetwork}/ephemeral`
        }`,
      });
      Tezos.setProvider({
        wallet: new TezBridgeWallet(),
      });
      // Originate a new contract
      Tezos.wallet
        .originate({
          code: code as MichelsonV1Expression[],
          init: storage as MichelsonV1Expression,
        })
        .send()
        .then((originationOp) => {
          return originationOp.contract();
        })
        .then((contract) => {
          // Remove contract launch snackbar message
          setLoading && setLoading(false);
          showSnackbar && showSnackbar(false);
          // Add block explorer snackbar message
          setLoadingMessage && setLoadingMessage("");
          setTxnAddress && setTxnAddress(contract.address);
          showSnackbar && showSnackbar(true);
        })
        .catch((e) => {
          throw e;
        });
      break;

    case "beacon":
      Tezos.wallet
        .originate({
          code: code as MichelsonV1Expression[],
          init: storage as MichelsonV1Expression,
        })
        .send()
        .then((originationOp) => {
          return originationOp.contract();
        })
        .then((contract) => {
          // Remove contract launch snackbar message
          setLoading && setLoading(false);
          showSnackbar && showSnackbar(false);
          // Add block explorer snackbar message
          setLoadingMessage && setLoadingMessage("");
          setTxnAddress && setTxnAddress(contract.address);
          showSnackbar && showSnackbar(true);
        })
        .catch((e) => {
          throw e;
        });

      break;

    default:
      break;
  }
};

export default setSignerMethod;
