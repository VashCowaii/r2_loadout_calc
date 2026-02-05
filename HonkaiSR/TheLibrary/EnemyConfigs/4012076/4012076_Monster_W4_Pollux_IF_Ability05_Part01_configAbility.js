const configAbility = {
  "fileName": "4012076_Monster_W4_Pollux_IF_Ability05_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "_ReadyToCharge",
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
        "target": "{{Hostile Entities(AOE)}}"
      },
      "ability": "Monster_W4_Pollux_IF_Ability05_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "onAbort": [
    {
      "name": "Define Custom Variable",
      "variableName": "_ReadyToCharge",
      "value": 0
    }
  ],
  "references": []
}