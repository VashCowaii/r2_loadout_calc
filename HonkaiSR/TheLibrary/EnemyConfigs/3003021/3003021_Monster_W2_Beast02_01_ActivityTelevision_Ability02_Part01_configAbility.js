const configAbility = {
  "fileName": "3003021_Monster_W2_Beast02_01_ActivityTelevision_Ability02_Part01",
  "childAbilityList": [
    "3003021_Monster_W2_Beast02_01_Ability02_Camera",
    "3003021_Monster_W2_Beast02_01_ActivityTelevision_Ability02_Part01",
    "3003021_Monster_W2_Beast02_01_ActivityTelevision_Ability02_Part02"
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
      "ability": "Monster_W2_Beast02_01_ActivityTelevision_Ability02_Part02",
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