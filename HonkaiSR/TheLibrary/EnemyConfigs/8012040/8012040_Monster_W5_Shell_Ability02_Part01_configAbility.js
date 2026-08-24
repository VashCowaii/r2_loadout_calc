const configAbility = {
  "fileName": "8012040_Monster_W5_Shell_Ability02_Part01",
  "childAbilityList": [
    "8012040_Monster_W5_Shell_Ability02_Camera",
    "8012040_Monster_W5_Shell_Ability02_Part01",
    "8012040_Monster_W5_Shell_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W5_Shell_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}