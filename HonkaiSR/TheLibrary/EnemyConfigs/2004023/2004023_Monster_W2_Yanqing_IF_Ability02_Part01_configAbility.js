const configAbility = {
  "fileName": "2004023_Monster_W2_Yanqing_IF_Ability02_Part01",
  "childAbilityList": [
    "2004023_Monster_W2_Yanqing_IF_Ability02_Part01",
    "2004023_Monster_W2_Yanqing_IF_Ability02_Part02",
    "2004023_Monster_W2_Yanqing_Ability02_Camera",
    "2004023_Monster_W2_Yanqing_IF_Ability02_Insert_Over",
    "2004023_Monster_W2_Yanqing_IF_Ability02_TeamFormation"
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
      "ability": "Monster_W2_Yanqing_IF_Ability02_Part02",
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