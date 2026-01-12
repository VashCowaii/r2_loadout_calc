const configAbility = {
  "fileName": "Moze_Moze_Ability03_Part01",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    30,
    0,
    0
  ],
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "OnInsertAbort_Flg",
      "value": 1
    },
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": "Caster",
      "ability": "Moze_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}