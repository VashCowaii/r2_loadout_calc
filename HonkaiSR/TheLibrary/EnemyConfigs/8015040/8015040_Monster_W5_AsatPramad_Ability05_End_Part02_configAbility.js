const configAbility = {
  "fileName": "8015040_Monster_W5_AsatPramad_Ability05_End_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Change Entity Turn-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "revertDefault": true
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Asat Pramad: Skill05 Target1}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1297194573\">Enemy_W5_AsatPramad_BonusTarget01</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Asat Pramad: Skill05 Target2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1246861716\">Enemy_W5_AsatPramad_BonusTarget02</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Asat Pramad: Skill05 Target3}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1263639335\">Enemy_W5_AsatPramad_BonusTarget03</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Asat Pramad: Skill05 Target4}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1213306478\">Enemy_W5_AsatPramad_BonusTarget04</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Asat Pramad: Skill05 Target5}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1230084097\">Enemy_W5_AsatPramad_BonusTarget05</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Asat Pramad: Skill05 Target6}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1179751240\">Enemy_W5_AsatPramad_BonusTarget06</a>"
    },
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
        "value2": 2
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1839166892\">W5_AsatPramad_Part02ChangeTo00</a>",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CurrentFace",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1505992097\">Enemy_W5_AsatPramad_BombCharging</a>[<span class=\"descriptionNumberColor\">Memes Incoming</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}