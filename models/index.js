// Dummy data mocking the phone verification process...
// At this point if they have not registered a profile or Bitcoin wallet...
// They must do so in order to be permitted to see their schedule. 
// This check must be accomplished by checking the database for a record of their 
// profile... For now we use a fake profile.
// WalkerModelActiveValid, WalkerModelActiveInvalid
// WalkerMOdelInActive(no name, no phone number on file, initally only stored temporarily, then obfuscated so that we have a cryptographic nonKYC record of the number)
export const WalkerModelActiveValid = { 
    name: {
      first: "Jack",
      crish: "Crish",
      phone: "2223332323"
    },
    address: {},
    verfied: true,
    activeLast30 : true,
    guid: "ABC123",
    publicKey: "iadmoc029384r12p2391090u8fas"
  }
  
export const TwilioVerifyResponse = { 
    success: true, 
    body: "You may now view your schedule"
  }
  
export const TwilioPhoneResponse = { 
    success: true,
    body: "Please enter your 6 digit verification code"
  }