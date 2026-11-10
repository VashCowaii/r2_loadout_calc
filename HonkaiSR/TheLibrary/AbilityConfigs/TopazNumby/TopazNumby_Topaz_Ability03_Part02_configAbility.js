const configAbility = {
  "fileName": "TopazNumby_Topaz_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Numby}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1524167625\">Topaz_BE_UltraEnhance_Text</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Numby}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1524167625\">Topaz_BE_UltraEnhance_Text</a>"
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Numby}}"
      },
      "ability": "Topaz_BE_RefreshEnhance"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]",
      "counter": {
        "displayLines": "MaxEnhance"
      },
      "valuePerStack": {
        "Ability03_P1_BEDamageRatio": {
          "displayLines": "1.5"
        },
        "Ability03_P2_CriticalChance": {
          "displayLines": "0.25"
        },
        "Ability03_P3_DelayRatio": {
          "displayLines": "0.5"
        },
        "Eidolon6_P2_PenRatio": {
          "displayLines": "0.1"
        }
      }
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "MaxEnhance"
      },
      "variableName": "CurEnhance"
    },
    {
      "name": "Show Attack Count",
      "target": {
        "name": "Target Name",
        "target": "{{Numby}}"
      },
      "attackCountEnhanced": {
        "displayLines": "MaxEnhance"
      },
      "show": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Numby}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1361568506\">Topaz_BE_UltraEnhance_ShowText</a>",
      "valuePerStack": {
        "ATKCount": {
          "displayLines": "MaxEnhance"
        }
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "displayLines": "MaxEnhance"
      },
      "maximum": {
        "displayLines": "MaxEnhance"
      },
      "assignState": "True",
      "priorState": "Active",
      "bar#": 3,
      "cooldown": 0
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}