const configAbility = {
  "fileName": "8012040_Monster_W5_Shell_Ability01Multi_Part01",
  "childAbilityList": [
    "8012040_Monster_W5_Shell_Ability01Multi_Camera",
    "8012040_Monster_W5_Shell_Ability01Multi_Boss_Camera",
    "8012040_Monster_W5_Shell_Ability01Multi_Part01",
    "8012040_Monster_W5_Shell_Ability01Multi_Part02",
    "8012040_Monster_W5_Shell_Ability01Multi_Part01_Assist_00",
    "8012040_Monster_W5_Shell_Ability01Multi_Part01_Assist_01"
  ],
  "skillTrigger": "Skill01Multi",
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
      "ability": "Monster_W5_Shell_Ability01Multi_Part02",
      "isTrigger": true
    },
    "Wait for Pending Ability Completions"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  },
  "references": []
}