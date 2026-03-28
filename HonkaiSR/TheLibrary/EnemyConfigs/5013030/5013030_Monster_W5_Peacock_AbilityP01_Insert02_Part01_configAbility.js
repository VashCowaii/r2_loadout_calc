const configAbility = {
  "fileName": "5013030_Monster_W5_Peacock_AbilityP01_Insert02_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W5_Peacock_AbilityP01_Insert02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "onAbort": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "ColorOutInsertFlag"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}