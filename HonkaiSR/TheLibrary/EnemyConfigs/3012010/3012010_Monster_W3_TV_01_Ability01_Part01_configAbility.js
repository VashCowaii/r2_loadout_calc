const configAbility = {
  "fileName": "3012010_Monster_W3_TV_01_Ability01_Part01",
  "childAbilityList": [
    "3012010_Monster_W3_TV_01_Ability01_Part01",
    "3012010_Monster_W3_TV_01_Ability01_Part02",
    "3012010_Monster_W3_TV_01_Ability01_Camera"
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
      "ability": "Monster_W3_TV_01_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}