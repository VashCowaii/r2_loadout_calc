const configAbility = {
  "fileName": "8015030_Monster_W5_AsatPramad_Ability05_End_Part01",
  "childAbilityList": [
    "8015030_Monster_W5_AsatPramad_Ability05_End_Part01",
    "8015030_Monster_W5_AsatPramad_Ability05_End_Part02",
    "8015030_Monster_W5_AsatPramad_Ability05_End_Camera"
  ],
  "skillTrigger": "Skill05_End",
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
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Attack Targets}}"
      },
      "ability": "Monster_W5_AsatPramad_Ability05_End_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Asat Pramad: 0}}"
        },
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 3
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1545281796\">W5_AsatPramad_Part03PosResetAfterAbility</a>"
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}",
    "allowUnselectable": true
  },
  "references": []
}