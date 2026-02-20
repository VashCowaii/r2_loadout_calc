const configAbility = {
  "fileName": "2032062_Monster_W2_FeixiaoPart_PassiveAbilityInitiate",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Boss Bar Display",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "display": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2121118445\">Monster_W2_FeixiaoPart_PartController</a>"
    },
    {
      "name": "Set Enemy Phase",
      "phase": 2,
      "applyOverride": false
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1856806253\">Standard_MuteAttachWeakness</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"637793327\">Monster_W2_FeixiaoPart_Formation</a>"
    },
    {
      "name": "Set Action-State",
      "on": null,
      "stateName": "FeixiaoPart",
      "state": false
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 2033021,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "Ecliptic Inner Beast & Shadow of \"Feixiao\""
      }
    },
    {
      "name": "Create Enemy as Body Part",
      "partName": "Head",
      "value": {
        "operator": "Variables[0] (PartEntity1_MonsterID) || RETURN",
        "displayLines": "PartEntity1_MonsterID",
        "constants": [],
        "variables": [
          "PartEntity1_MonsterID"
        ]
      },
      "offset": 2,
      "linkHitByPart": true
    },
    {
      "name": "Create Enemy as Body Part",
      "partName": "Limb",
      "value": {
        "operator": "Variables[0] (PartEntity2_MonsterID) || RETURN",
        "displayLines": "PartEntity2_MonsterID",
        "constants": [],
        "variables": [
          "PartEntity2_MonsterID"
        ]
      },
      "offset": -1,
      "type": 2,
      "linkHitByPart": true
    },
    {
      "name": "Create Enemy as Body Part",
      "partName": "Tail",
      "value": {
        "operator": "Variables[0] (PartEntity3_MonsterID) || RETURN",
        "displayLines": "PartEntity3_MonsterID",
        "constants": [],
        "variables": [
          "PartEntity3_MonsterID"
        ]
      },
      "offset": -2,
      "type": 3,
      "linkHitByPart": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1365495312\">Monster_W2_FeixiaoPart_HeadNormalEffect</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-31609686\">Monster_W2_FeixiaoPart_LimbNormalEffect</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"506782608\">Monster_W2_FeixiaoPart_TailNormalEffect</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-255389438\">Monster_W2_FeixiaoPart_Part2Effect</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1095211474\">Monster_W2_FeixiaoPart_Part2ResidentEffect</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1236954137\">Monster_W2_FeixiaoPart_Unselectable</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1306733131\">Monster_W2_Feixiao_Stop</a>"
    }
  ],
  "references": []
}