export const rfqabi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'escrowNumber',
        type: 'uint256',
      },
      {
        internalType: 'enum RFQ.BadEscrowReason',
        name: 'reason',
        type: 'uint8',
      },
    ],
    name: 'BadEscrow',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'offerer',
        type: 'address',
      },
      {
        internalType: 'bytes25',
        name: 'bitcoinAddress',
        type: 'bytes25',
      },
      {
        internalType: 'uint256',
        name: 'requestNumber',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'quoteNumber',
        type: 'uint256',
      },
      {
        internalType: 'enum RFQ.BadQuoteReason',
        name: 'reason',
        type: 'uint8',
      },
    ],
    name: 'BadQuote',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'bitcoinAddressOwner',
        type: 'address',
      },
      {
        internalType: 'bytes25',
        name: 'bitcoinAddress',
        type: 'bytes25',
      },
      {
        internalType: 'uint256',
        name: 'requestNumber',
        type: 'uint256',
      },
      {
        internalType: 'enum RFQ.BadRequestReason',
        name: 'reason',
        type: 'uint8',
      },
    ],
    name: 'BadRequest',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_escrowNumber',
        type: 'uint256',
      },
    ],
    name: 'cancelEscrow',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes25',
        name: '_bitcoinAddress',
        type: 'bytes25',
      },
      {
        internalType: 'uint256',
        name: '_requestNumber',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_quoteNumber',
        type: 'uint256',
      },
    ],
    name: 'cancelQuote',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes25',
        name: '_bitcoinAddress',
        type: 'bytes25',
      },
      {
        internalType: 'uint256',
        name: '_requestNumber',
        type: 'uint256',
      },
    ],
    name: 'cancelRequest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'escrowNumber',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'expiry',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'blockTimestamp',
        type: 'uint256',
      },
    ],
    name: 'EscrowExpired',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'escrowNumber',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'expiry',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'blockTimestamp',
        type: 'uint256',
      },
    ],
    name: 'EscrowHasNotExpired',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'expiry',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'currentBlockTimestamp',
        type: 'uint256',
      },
    ],
    name: 'ExpiryInThePast',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'offerer',
        type: 'address',
      },
      {
        internalType: 'bytes25',
        name: 'bitcoinAddress',
        type: 'bytes25',
      },
      {
        internalType: 'uint256',
        name: 'requestNumber',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'quoteNumber',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'erc20Address',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'FailedToTransferFundsForLockingQuote',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'destination',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'escrowNumber',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'erc20Address',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'FailedToTransferOutOfEscrow',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_escrowNumber',
        type: 'uint256',
      },
    ],
    name: 'fulfillRequest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'offerer',
        type: 'address',
      },
      {
        internalType: 'bytes25',
        name: 'bitcoinAddress',
        type: 'bytes25',
      },
      {
        internalType: 'uint256',
        name: 'requestNumber',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'erc20Address',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'erc20balance',
        type: 'uint256',
      },
    ],
    name: 'InsufficientBalanceForQuote',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'bytes25',
        name: '_bitcoinAddress',
        type: 'bytes25',
      },
      {
        internalType: 'uint256',
        name: '_requestNumber',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_quoteNumber',
        type: 'uint256',
      },
      {
        internalType: 'bytes25',
        name: '_destinationBitcoinAddress',
        type: 'bytes25',
      },
    ],
    name: 'lockQuote',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes25',
        name: '_bitcoinAddress',
        type: 'bytes25',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_expiry',
        type: 'uint256',
      },
    ],
    name: 'makeRequest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'NotOwner',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'offerer',
        type: 'address',
      },
      {
        internalType: 'bytes25',
        name: 'bitcoinAddress',
        type: 'bytes25',
      },
      {
        internalType: 'uint256',
        name: 'requestNumber',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'expiry',
        type: 'uint256',
      },
    ],
    name: 'QuoteAmountMustBeNonZero',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'bytes25',
        name: 'bitcoinAddress',
        type: 'bytes25',
      },
      {
        internalType: 'uint256',
        name: 'expiry',
        type: 'uint256',
      },
    ],
    name: 'RequestAmountMustBeNonZero',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'bytes25',
        name: 'bitcoinAddress',
        type: 'bytes25',
      },
      {
        internalType: 'uint256',
        name: 'requestNumber',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'quoteSelected',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'badQuoteNumber',
        type: 'uint256',
      },
    ],
    name: 'RequestHasNotSelectedQuote',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'bitcoinAddressOwner',
        type: 'address',
      },
      {
        internalType: 'bytes25',
        name: 'bitcoinAddress',
        type: 'bytes25',
      },
    ],
    name: 'SenderDoesNotControlBitcoinAddress',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'offerer',
        type: 'address',
      },
      {
        internalType: 'bytes25',
        name: 'bitcoinAddress',
        type: 'bytes25',
      },
      {
        internalType: 'uint256',
        name: 'requestNumber',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'quoteNumber',
        type: 'uint256',
      },
    ],
    name: 'SenderDoesNotOwnQuote',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes25',
        name: 'bitcoinAddress',
        type: 'bytes25',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'BitcoinAddressOwnerChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'escrowNumber',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'offerer',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'bytes25',
        name: 'originatorBitcoinAddress',
        type: 'bytes25',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'requestNumber',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'quoteNumber',
        type: 'uint256',
      },
    ],
    name: 'EscrowCanceled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'offerer',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'bytes25',
        name: 'bitcoinAddress',
        type: 'bytes25',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'requestNumber',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'offerNumber',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'erc20Address',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'expiry',
        type: 'uint256',
      },
    ],
    name: 'NewQuote',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes25',
        name: 'bitcoinAddress',
        type: 'bytes25',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'expiry',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'requestNumber',
        type: 'uint256',
      },
    ],
    name: 'NewRequest',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'bytes25',
        name: '_bitcoinAddress',
        type: 'bytes25',
      },
      {
        internalType: 'uint256',
        name: '_requestNumber',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_erc20Address',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_expiry',
        type: 'uint256',
      },
    ],
    name: 'offerQuote',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnerChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'offerer',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'bytes25',
        name: 'bitcoinAddress',
        type: 'bytes25',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'requestNumber',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'quoteNumber',
        type: 'uint256',
      },
    ],
    name: 'QuoteCanceled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'escrowNumber',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'bytes25',
        name: 'bitcoinAddress',
        type: 'bytes25',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'requestNumber',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'quoteNumber',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes25',
        name: 'destinationBitcoinAddress',
        type: 'bytes25',
      },
    ],
    name: 'QuoteLocked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'offerer',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'bytes25',
        name: 'bitcoinAddress',
        type: 'bytes25',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'requestNumber',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'quoteNumber',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'erc20Address',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'expiry',
        type: 'uint256',
      },
    ],
    name: 'QuoteOffered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes25',
        name: 'bitcoinAddress',
        type: 'bytes25',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'requestNumber',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'quoteNumber',
        type: 'uint256',
      },
    ],
    name: 'QuoteSelected',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes25',
        name: 'bitcoinAddress',
        type: 'bytes25',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'requestNumber',
        type: 'uint256',
      },
    ],
    name: 'RequestCanceled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'escrowNumber',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'bytes25',
        name: 'originatorBitcoinAddress',
        type: 'bytes25',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'destinationBitcoinAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'requestNumber',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'quoteNumber',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'erc20Address',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'RequestFulfilled',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'bytes25',
        name: '_bitcoinAddress',
        type: 'bytes25',
      },
      {
        internalType: 'uint256',
        name: '_requestNumber',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_quoteNumber',
        type: 'uint256',
      },
    ],
    name: 'selectQuote',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes25',
        name: '_bitcoinAddress',
        type: 'bytes25',
      },
      {
        internalType: 'address',
        name: '_newBitcoinAddressOwner',
        type: 'address',
      },
    ],
    name: 'setBitcoinAddressOwner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_newOwner',
        type: 'address',
      },
    ],
    name: 'setOwner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bitcoinAddressCounter',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'bitcoinAddresses',
    outputs: [
      {
        internalType: 'bytes25',
        name: '',
        type: 'bytes25',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes25',
        name: '',
        type: 'bytes25',
      },
    ],
    name: 'bitcoinAddressOwners',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'escrowCounter',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'escrowExpiryTimeDelta',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_bitcoinAddressCounter',
        type: 'uint256',
      },
    ],
    name: 'getBitcoinAddress',
    outputs: [
      {
        internalType: 'bytes25',
        name: '',
        type: 'bytes25',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getBitcoinAddressCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes25',
        name: '_bitcoinAddress',
        type: 'bytes25',
      },
    ],
    name: 'getBitcoinAddressOwner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'escrowNumber',
        type: 'uint256',
      },
    ],
    name: 'getEscrow',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'creationTime',
            type: 'uint256',
          },
          {
            internalType: 'bytes25',
            name: 'originatorBitcoinAddress',
            type: 'bytes25',
          },
          {
            internalType: 'uint256',
            name: 'requestNumber',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'quoteNumber',
            type: 'uint256',
          },
          {
            internalType: 'bytes25',
            name: 'destinationBitcoinAddress',
            type: 'bytes25',
          },
          {
            internalType: 'bool',
            name: 'fulfilled',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'canceled',
            type: 'bool',
          },
        ],
        internalType: 'struct RFQ.Escrow',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getEscrowCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes25',
        name: 'bitcoinAddress',
        type: 'bytes25',
      },
      {
        internalType: 'uint256',
        name: 'requestNumber',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'quoteNumber',
        type: 'uint256',
      },
    ],
    name: 'getQuote',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'offerer',
            type: 'address',
          },
          {
            internalType: 'contract IERC20',
            name: 'erc20',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'expiry',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'canceled',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'escrowNumber',
            type: 'uint256',
          },
        ],
        internalType: 'struct RFQ.Quote',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes25',
        name: 'bitcoinAddress',
        type: 'bytes25',
      },
      {
        internalType: 'uint256',
        name: 'requestNumber',
        type: 'uint256',
      },
    ],
    name: 'getQuoteCounter',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes25',
        name: 'bitcoinAddress',
        type: 'bytes25',
      },
      {
        internalType: 'uint256',
        name: 'requestNumber',
        type: 'uint256',
      },
    ],
    name: 'getRequest',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'expiry',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'canceled',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'quoteSelected',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'fulfilled',
            type: 'bool',
          },
        ],
        internalType: 'struct RFQ.Request',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes25',
        name: 'bitcoinAddress',
        type: 'bytes25',
      },
    ],
    name: 'getRequestCounter',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes25',
        name: '',
        type: 'bytes25',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'quoteCounter',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes25',
        name: '',
        type: 'bytes25',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'quotes',
    outputs: [
      {
        internalType: 'address',
        name: 'offerer',
        type: 'address',
      },
      {
        internalType: 'contract IERC20',
        name: 'erc20',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'expiry',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'canceled',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: 'escrowNumber',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes25',
        name: '',
        type: 'bytes25',
      },
    ],
    name: 'requestCounter',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes25',
        name: '',
        type: 'bytes25',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'requests',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'expiry',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'canceled',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: 'quoteSelected',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'fulfilled',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const;
