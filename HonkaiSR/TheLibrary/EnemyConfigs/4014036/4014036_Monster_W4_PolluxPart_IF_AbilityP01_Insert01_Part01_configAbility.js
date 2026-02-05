const configAbility = {
  "fileName": "4014036_Monster_W4_PolluxPart_IF_AbilityP01_Insert01_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "InsertFlag01",
      "value": 0
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "Monster_W4_PolluxPart_IF_AbilityP01_Insert01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "onAbort": [
    {
      "name": "Define Custom Variable",
      "variableName": "InsertFlag01",
      "value": 0
    }
  ],
  "references": []
}