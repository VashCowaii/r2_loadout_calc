const configAbility = {
  "fileName": "2013013_Monster_W2_Mecha03_AbilityP01_Insert_FateRin",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-286697001\">Enemy_W2_Mecha03_Overdrive_DelayActive_Controller</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"255287671\">Enemy_W2_Mecha03_Overdrive_Accumulate_Display3</a>[<span class=\"descriptionNumberColor\">Sanction Rate</span>]"
    },
    "Deleted bullshit",
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1534117603\">Enemy_W2_Mecha03_Overdrive_Accumulate_FateRin</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1941111631\">Enemy_W2_Mecha03_Overdrive_Accumulate_Toast</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"304092876\">Enemy_W2_Mecha03_Overdrive_On_FateRin</a>"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "W2_Mecha03_00_Overdrive_InsertFlag"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}