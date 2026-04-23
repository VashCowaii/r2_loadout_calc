const configAbility = {
  "fileName": "5012081_Monster_W5_VtuberPart02_Ability01_Part01",
  "childAbilityList": [
    "5012081_Monster_W5_VtuberPart02_Ability01_Part01",
    "5012081_Monster_W5_VtuberPart02_Ability01_Part02",
    "5012081_Monster_W5_VtuberPart02_Ability01_Camera"
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
      "ability": "Monster_W5_VtuberPart02_Ability01_Part02",
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