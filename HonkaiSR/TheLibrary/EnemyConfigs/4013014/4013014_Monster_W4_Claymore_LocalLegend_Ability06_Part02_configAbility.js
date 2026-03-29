const configAbility = {
  "fileName": "4013014_Monster_W4_Claymore_LocalLegend_Ability06_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Military Might Unstoppable"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"530468008\">Enemy_W4_Claymore_LocalLegend_Init_LockHp</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"449361701\">Enemy_Standard_LocalLegend_Init_MuteBreak</a>"
    },
    {
      "name": "Define Variable with Battle Goal Param",
      "goalID": 5001802,
      "variableName": "_BattleTarget_S1_2_Param"
    },
    {
      "name": "Define Variable with Battle Goal Param",
      "goalID": 5001803,
      "variableName": "_BattleTarget_S1_3_Param"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-707065504\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Status</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1468533169\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Status</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}