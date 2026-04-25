const configAbility = {
  "fileName": "5023011_Monster_XP_Elite02_03_Ability02_Part01",
  "childAbilityList": [
    "5023011_Monster_XP_Elite02_03_Ability02_Camera",
    "5023011_Monster_XP_Elite02_03_Ability02_Camera_02",
    "5023011_Monster_XP_Elite02_03_Ability02_Part01",
    "5023011_Monster_XP_Elite02_03_Ability02_Part02",
    "5023011_Monster_XP_Elite02_03_Ability02_Part03",
    "5023011_Monster_XP_Elite02_03_Ability02_Part02_Assist_00",
    "5023011_Monster_XP_Elite02_03_Ability02_Part02_Assist_01",
    "5023011_Monster_XP_Elite02_03_Ability02_Part02_Assist_02",
    "5023011_Monster_XP_Elite02_03_Ability02_Part02_Assist_03"
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
      "ability": "Monster_XP_Elite02_03_Ability02_Part02",
      "isTrigger": true
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_XP_Elite02_03_Ability02_Part03"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target",
    "targetIsVariable": true
  },
  "references": []
}