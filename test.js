import HashMap from "./hash-map.js";

const hashMap = HashMap();

const testDatas = [
  // * handle the same key
  { key: "Carlos", value: "I'm the old value" },
  { key: "Carlos", value: "I'm the new value" },

  // * handle collission
  { key: "Jena", value: "my name is Jena nice to meet you" },
  { key: "Selena", value: "my name is Selena nice to meet you" },
  { key: "Jena", value: "My name is Jena, Nice to meet you!" },
  { key: "Selena", value: "My name is Selena, Nice to meet you!" },

  { key: "alexis", value: "my name alexis" },
  { key: "alexis", value: "I'm supersmarto, and kindo" },
  { key: "alexis", value: "im mcdonaldu and i serve peoples foodo" },
  { key: "alexis", value: "im amara, im super great of balarino" },
  { key: "pena", value: " pena desu" },
  { key: "pena", value: "naruhodo" },
  { key: "pia", value: "pia desu" },

  { key: "nica", value: "im nica" },
  { key: "manok", value: "my name is manok" },
  { key: "patu", value: " pena desu" },
  { key: "naku", value: " pena desu" },
  { key: "hatdok", value: " pena desu" },

  { key: "abida", value: "im abida" },
  { key: "alid", value: "im alido" },
  { key: "bersu", value: "im versu" },
  { key: "nesma", value: "im nesma" },
];
hashMap.bucketsSize();
testDatas.forEach((data) => hashMap.set(data.key, data.value));
/**
hashMap.remove("alexis");
hashMap.get("alexis");
hashMap.has("alexis");

hashMap.remove("Carlos");
hashMap.get("Carlos");
hashMap.has("Carlos");
*/

console.log(
  hashMap.length(),
  hashMap.keys(),
  hashMap.values(),
  hashMap.entries()
);
