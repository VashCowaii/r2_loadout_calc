const configAbility = {
  "fileName": "Qingque_QingQue_PassiveAbility01",
  "childAbilityList": [
    "Qingque_QingQue_PassiveAbility01",
    "Qingque_Qingque_Bonus",
    "Qingque_Qingque_Eidolon4_ATK_Camera",
    "Qingque_Qingque_Bonus_Camera",
    "Qingque_Qingque_Eidolon4_ATK_Special_Camera",
    "Qingque_Qingque_UltraGangFix_Camera"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "QingQue_BPCoolDown"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "QingQue_BPCount"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "QingQue_CardCount"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "0.72"
      },
      "variableName": "MDF_PropertyValue01"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "0.72"
      },
      "variableName": "MDF_PropertyValue"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "QingQue_Wan"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "QingQue_Tong"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "QingQue_Tiao"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1424511139\">QingQue_PassiveCount</a>",
      "valuePerStack": {
        "MDF_PropertyValue01": {
          "displayLines": "0.72"
        }
      }
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}