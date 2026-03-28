const configAbility = {
  "fileName": "3002043_Monster_W3_Clock_02_Ability03_Part01",
  "childAbilityList": [
    "3002043_Monster_W3_Clock_02_Ability03_Part01",
    "3002043_Monster_W3_Clock_02_Ability03_Part02",
    "3002043_Monster_W3_Clock_02_Ability03_Camera",
    "3002043_Monster_W3_Clock_02_Ability03_Camera_Special",
    "3002043_Monster_W3_Clock_02_IF_Ability03_Insert_Part01",
    "3002043_Monster_W3_Clock_02_IF_Ability03_Insert_Part02",
    "3002043_Monster_W3_Clock_02_IF_Ability03_Insert_Camera",
    "3002043_Monster_W3_Clock_02_IF_Ability03_Insert_Camera_Low"
  ],
  "skillTrigger": "Skill03",
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
      "ability": "Monster_W3_Clock_02_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}