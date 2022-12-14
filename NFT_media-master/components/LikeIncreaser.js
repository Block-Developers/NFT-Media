import { useWeb3Contract } from "react-moralis";
import { abi, contractAddresses } from "../constants";
import { useMoralis } from "react-moralis";
export default function LikePlus() {
  const { runContractFunction: likeplus } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddresses, //need to specify the chain id
    functionName: "likeplus",
    params: {},
  });
  return <div>like checking</div>;
}
