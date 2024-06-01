/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  SusuwatariFacet,
  SusuwatariFacetInterface,
} from "../../contracts/SusuwatariFacet";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "location",
        type: "string",
      },
      {
        internalType: "string",
        name: "destination",
        type: "string",
      },
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "aimInitialSusu",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "location",
        type: "string",
      },
      {
        internalType: "string",
        name: "destination",
        type: "string",
      },
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "dropSusu",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentState",
    outputs: [
      {
        components: [
          {
            internalType: "uint256[]",
            name: "ownedTokens",
            type: "uint256[]",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "susuTokenId",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "dropCooldownTime",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "ownerAddress",
                type: "address",
              },
            ],
            internalType: "struct BaggageSlot",
            name: "slot",
            type: "tuple",
          },
        ],
        internalType: "struct UserState",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "registerMe",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "location",
        type: "string",
      },
      {
        internalType: "string",
        name: "destination",
        type: "string",
      },
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "tryPickupSusu",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60808060405234610016576118e8908161001c8239f35b600080fdfe6080604052600436101561001257600080fd5b60003560e01c8063378aa701146113015780635fd9a90d14610fac57806378630748146109b357806383d4fdce1461071557639a198d611461005357600080fd5b34610710576000366003190112610710573360009081527f202e1867cade063e32a2eb339a246f853a1a233314949ba8d9e2ac766f6ed84660205260409020546106cb576000805160206118938339815191528054600181018091116106b5576040519060e082018281106001600160401b0382111761045f576040528152604051916100df83611570565b60008352602082019283526040516100f681611570565b60008152604083015260405161010b81611570565b60008152606083015260405161012081611570565b6000815260808301523360a0830152600060c083015260016101733360018060a01b03166000527f202e1867cade063e32a2eb339a246f853a1a233314949ba8d9e2ac766f6ed846602052604060002090565b5580546801000000000000000081101561045f57610196916001820190556116e9565b81549060031b9033821b9160018060a01b03901b1916179055805160005260008051602061185383398151915260205260406000209181518355519182516001600160401b03811161045f576101ef6001830154611742565b601f811161066e575b506020601f821160011461060057819293946000926105f5575b50508160011b916000199060031b1c19161760018201555b60408201519182516001600160401b03811161045f5761024d6002840154611742565b601f81116105ae575b506020601f82116001146105405781929394600092610535575b50508160011b916000199060031b1c19161760028301555b60608101519182516001600160401b03811161045f576102ab6003830154611742565b601f81116104ee575b506020601f82116001146104805781929394600092610475575b50508160011b916000199060031b1c19161760038201555b60808201519182516001600160401b03811161045f576103096004840154611742565b601f8111610414575b506020601f82116001146103a8578192939460009261039d575b50508160011b916000199060031b1c19161760048301555b600582019160018060a01b0360a083015116926001600160601b0360a01b9384825416179055600660c0830151910155516000526000805160206118738339815191526020526040600020903390825416179055600080f35b01519050388061032c565b601f198216906004850160005260206000209160005b8181106103fc575095836001959697106103e3575b505050811b016004830155610344565b015160001960f88460031b161c191690553880806103d3565b9192602060018192868b0151815501940192016103be565b600484016000526020600020601f830160051c81019160208410610455575b601f0160051c01905b8181106104495750610312565b6000815560010161043c565b9091508190610433565b634e487b7160e01b600052604160045260246000fd5b0151905038806102ce565b6003830160005260206000209060005b601f19841681106104d65750600193949583601f198116106104bd575b505050811b0160038201556102e6565b015160001960f88460031b161c191690553880806104ad565b9091602060018192858a015181550193019101610490565b600383016000526020600020601f830160051c81016020841061052e575b601f830160051c820181106105225750506102b4565b6000815560010161050c565b508061050c565b015190503880610270565b6002840160005260206000209060005b601f19841681106105965750600193949583601f1981161061057d575b505050811b016002830155610288565b015160001960f88460031b161c1916905538808061056d565b9091602060018192858a015181550193019101610550565b600284016000526020600020601f830160051c8101602084106105ee575b601f830160051c820181106105e2575050610256565b600081556001016105cc565b50806105cc565b015190503880610212565b6001830160005260206000209060005b601f19841681106106565750600193949583601f1981161061063d575b505050811b01600182015561022a565b015160001960f88460031b161c1916905538808061062d565b9091602060018192858a015181550193019101610610565b600183016000526020600020601f830160051c8101602084106106ae575b601f830160051c820181106106a25750506101f8565b6000815560010161068c565b508061068c565b634e487b7160e01b600052601160045260246000fd5b60405162461bcd60e51b815260206004820152601760248201527f5573657220616c726561647920726567697374657265640000000000000000006044820152606490fd5b600080fd5b346107105761072336611602565b9083929315158061099a575b6107389061177c565b600083815260008051602061185383398151915260208181526040909220600501546001600160a01b0316330361094457846000528152604060002060405161012d838201826107a889334285916054939183526001600160601b03199060601b16602083015260348201520190565b03926107bc601f199485810183528261158b565b5190200661012c9081018091116106b5576006830155865160028301916001600160401b03821161045f576107f18354611742565b601f81116108fe575b508490601f8311600114610883575092600080516020611873833981519152928260059361087499989796600091610878575b508160011b916000199060031b1c19161790555b01916001600160601b0360a01b9283815416905586600052526040600020903390825416179055604051948594856116ad565b0390f35b90508b01518c61082d565b82169083600052856000209160005b8b8282106108e75750508361087499989796936000805160206118738339815191529693600596600194106108ce575b5050811b019055610841565b8d015160001960f88460031b161c191690558c806108c2565b600184958a93958493015181550194019201610892565b8360005285600020601f840160051c81019187851061093a575b601f0160051c01905b81811061092e57506107fa565b60008155600101610921565b9091508190610918565b60405162461bcd60e51b815260048101839052602860248201527f43616c6c657220646f65736e27742063617272792061205375737577617461726044820152676920546f6b656e2160c01b6064820152608490fd5b506000805160206118938339815191525483111561072f565b34610710576109c136611602565b90839293151580610f93575b6109d69061177c565b60001983018381116106b5576109eb906116e9565b905460039190911b1c6001600160a01b0390811633149081610f68575b5015610f2d5782600052600080516020611853833981519152602052604060002061012d6040516020810190610a7081610a6289334287916054939183526001600160601b03199060601b16602083015260348201520190565b03601f19810183528261158b565b5190200661012c9081018091116106b557600682015584516001600160401b03811161045f57610aa36001830154611742565b601f8111610ee6575b50806020601f8211600114610e7957600091610e6e575b508160011b916000199060031b1c19161760018201555b84516001600160401b03811161045f57610af76002830154611742565b601f8111610e27575b50806020601f8211600114610dba57600091610daf575b508160011b916000199060031b1c19161760028201555b81516001600160401b03811161045f57610b4b6003830154611742565b601f8111610d68575b50806020601f8211600114610cfb57600091610cf0575b508160011b916000199060031b1c19161760038201555b82516001600160401b03811161045f57610b9f6004830154611742565b601f8111610ca5575b506020601f8211600114610c30579181600592610874969594600091610c25575b508160011b916000199060031b1c19161760048201555b016001600160601b0360a01b903382825416179055846000526000805160206118738339815191526020526040600020903390825416179055604051948594856116ad565b905085015189610bc9565b6004830160005260206000209060005b601f1984168110610c8d57508261087496959492600192600595601f19811610610c74575b5050811b016004820155610be0565b87015160001960f88460031b161c191690558980610c65565b9091602060018192858a015181550193019101610c40565b600483016000526020600020601f830160051c81019160208410610ce6575b601f0160051c01905b818110610cda5750610ba8565b60008155600101610ccd565b9091508190610cc4565b905083015187610b6b565b91506003830160005260206000206000925b601f1983168410610d50576001935082601f19811610610d37575b5050811b016003820155610b82565b85015160001960f88460031b161c191690558780610d28565b85810151825560209384019360019092019101610d0d565b600383016000526020600020601f830160051c810160208410610da8575b601f830160051c82018110610d9c575050610b54565b60008155600101610d86565b5080610d86565b905086015187610b17565b91506002830160005260206000206000925b601f1983168410610e0f576001935082601f19811610610df6575b5050811b016002820155610b2e565b88015160001960f88460031b161c191690558780610de7565b88810151825560209384019360019092019101610dcc565b600283016000526020600020601f830160051c810160208410610e67575b601f830160051c82018110610e5b575050610b00565b60008155600101610e45565b5080610e45565b905086015187610ac3565b91506001830160005260206000206000925b601f1983168410610ece576001935082601f19811610610eb5575b5050811b016001820155610ada565b88015160001960f88460031b161c191690558780610ea6565b88810151825560209384019360019092019101610e8b565b600183016000526020600020601f830160051c810160208410610f26575b601f830160051c82018110610f1a575050610aac565b60008155600101610f04565b5080610f04565b60405162461bcd60e51b815260206004820152601360248201527221b0b63632b91034b9903737ba1037bbb732b960691b6044820152606490fd5b9050836000526000805160206118538339815191526020523390600560406000200154161485610a08565b50600080516020611893833981519152548311156109cd565b3461071057610fba36611602565b8392931515806112e8575b610fce9061177c565b60008060008051602061189383398151915254905b8181106112a0575b505061124757600083815260008051602061185383398151915260208181526040909220600501549193916001600160a01b03166112025784600052835260406000209260028401604051908183810191600090805461104a81611742565b916001918883821691826000146111e75750506001146111ab575b505050039161107c601f199384810183528261158b565b519020876040516110a985828161109c8183019687815193849201611665565b810103808452018261158b565b5190200361115857604051428382019081523360601b6bffffffffffffffffffffffff191660208201526034810188905261012d929091906110f69082605485010390810183528261158b565b519020069361012c9485018095116106b55760058161087496600660008051602061187383398151915294015501916001600160601b0360a01b92338482541617905586600052526040600020903390825416179055604051948594856116ad565b60405162461bcd60e51b815260048101839052602560248201527f43616c6c6572206973206e6f7420696e2074686520636f7272656374206c6f6360448201526430ba34b7b760d91b6064820152608490fd5b87935060005282600020906000915b8383106111cf575050508201018a8080611065565b805483890186015287955088949092019181016111ba565b93509450505060ff19168452801515028201018a8080611065565b60405162461bcd60e51b815260048101859052601e60248201527f5375737520697320616c7265616479206265696e6720636172726965642100006044820152606490fd5b60405162461bcd60e51b815260206004820152602b60248201527f43616c6c657220697320616c726561647920636172727920612053757375776160448201526a7461726920546f6b656e2160a81b6064820152608490fd5b600081815260008051602061185383398151915260205260409020600501546001600160a01b031633146112dc576112d7906117c8565b610fe3565b50505060018580610feb565b5060008051602061189383398151915254831115610fc5565b346107105760003660031901126107105761131a611806565b50611323611806565b5060008060008051602061189383398151915254905b818110611510575061134a82611827565b91611358604051938461158b565b808352611367601f1991611827565b0190602091368385013760009060005b8181106114b4575050506113896117d7565b6000915b83518310156114ad576113a0838561183e565b5160008181526000805160206118538339815191528084526040909120600501549094916001600160a01b0391821633146113ea5750506113e3919293506117c8565b919061138d565b80855260008181529584526040909520600601548385015291936000198101915081116106b55761141a906116e9565b90549060031b1c1660408201525b6040519261143584611555565b83528183019081526040519180835260a0830193519160808285015282518095528160c0850193016000955b80871061149657505051805160408086019190915291810151606085015201516001600160a01b031660808301528190039150f35b909383806001928751815201950196019590611461565b9150611428565b6114bd816116e9565b90543360039290921b1c6001600160a01b0316146114e4575b6114df906117c8565b611377565b91600183018084116106b55781611508916115026114df948961183e565b526117c8565b9290506114d6565b611519816116e9565b90543360039290921b1c6001600160a01b031614611540575b61153b906117c8565b611339565b9161154d61153b916117c8565b929050611532565b604081019081106001600160401b0382111761045f57604052565b602081019081106001600160401b0382111761045f57604052565b90601f801991011681019081106001600160401b0382111761045f57604052565b81601f82011215610710578035906001600160401b03821161045f57604051926115e0601f8401601f19166020018561158b565b8284526020838301011161071057816000926020809301838601378301015290565b90608060031983011261071057600435916001600160401b03916024358381116107105782611633916004016115ac565b92604435818111610710578361164b916004016115ac565b9260643591821161071057611662916004016115ac565b90565b60005b8381106116785750506000910152565b8181015183820152602001611668565b906020916116a181518092818552858086019101611665565b601f01601f1916010190565b926116cd61166295936116db938652608060208701526080860190611688565b908482036040860152611688565b916060818403910152611688565b600080516020611893833981519152805482101561172c576000527f5b627e705e277f4cd69351cfcf0179f3685951408382038c266c60748db0394a0190600090565b634e487b7160e01b600052603260045260246000fd5b90600182811c92168015611772575b602083101461175c57565b634e487b7160e01b600052602260045260246000fd5b91607f1691611751565b1561178357565b60405162461bcd60e51b815260206004820152601d60248201527f546865205375737577617461726920646f6573206e6f742065786973740000006044820152606490fd5b60001981146106b55760010190565b60405190606082018281106001600160401b0382111761045f5760405260006040838281528260208201520152565b6040519061181382611555565b816060815260206118226117d7565b910152565b6001600160401b03811161045f5760051b60200190565b805182101561172c5760209160051b01019056fe202e1867cade063e32a2eb339a246f853a1a233314949ba8d9e2ac766f6ed848202e1867cade063e32a2eb339a246f853a1a233314949ba8d9e2ac766f6ed84a202e1867cade063e32a2eb339a246f853a1a233314949ba8d9e2ac766f6ed847a26469706673582212207dcecfe8440c1811f8620681965962171415f9a0345d5273aa86d596d646bd9164736f6c63430008120033";

type SusuwatariFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SusuwatariFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SusuwatariFacet__factory extends ContractFactory {
  constructor(...args: SusuwatariFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SusuwatariFacet> {
    return super.deploy(overrides || {}) as Promise<SusuwatariFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SusuwatariFacet {
    return super.attach(address) as SusuwatariFacet;
  }
  override connect(signer: Signer): SusuwatariFacet__factory {
    return super.connect(signer) as SusuwatariFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SusuwatariFacetInterface {
    return new utils.Interface(_abi) as SusuwatariFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SusuwatariFacet {
    return new Contract(address, _abi, signerOrProvider) as SusuwatariFacet;
  }
}