const configAbility = {
  "fileName": "5014015_Monster_W5_Vtuber_Ability01_Part01",
  "childAbilityList": [
    "5014015_Monster_W5_Vtuber_Ability01_Part01",
    "5014015_Monster_W5_Vtuber_Ability01_Part02",
    "5014015_Monster_W5_Vtuber_Ability01_Camera"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W5_Vtuber_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  },
  "references": []
}