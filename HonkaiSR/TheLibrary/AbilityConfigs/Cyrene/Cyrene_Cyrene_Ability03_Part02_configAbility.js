const configAbility = {
  "fileName": "Cyrene_Cyrene_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "SpecialSPNeed",
      "value": 12
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1728765029\">Cyrene_ExtraSpecialSPReturn</a>",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Summon Memosprite",
      "memoID": 11415
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Memosprites and Self)}}"
      },
      "valuePercent": 1,
      "isFixed": "(Fixed)",
      "isSetToValue": true,
      "ignoreBlock": true
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Memosprites and Self)}}"
      },
      "valuePercent": 1,
      "isFixed": "(Fixed)",
      "isSetToValue": true,
      "ignoreBlock": true,
      "isSpecialEnergy": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1470142416\">Cyrene_Ability03</a>[<span class=\"descriptionNumberColor\">Ripples of Past Reverie</span>]"
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Memosprite}}"
      },
      "scope": "TargetEntity",
      "variableName": "CurSpecialSP",
      "value": {
        "operator": "Variables[0] (CurSpecialSP) || RETURN",
        "displayLines": "CurSpecialSP",
        "constants": [],
        "variables": [
          "CurSpecialSP"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}.[[getTeamMembers]].[[removeMemosprite]].[[removeUnselectable]].[[living]]"
        },
        "compareType": ">=",
        "value2": 2
      },
      "passed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "ability": "Servant_CyreneServant_Ability02_Ready",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Auto-Battle"
          }
        }
      ],
      "failed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "ability": "Servant_CyreneServant_Ability01_Ready",
          "isTrigger": true
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "advanceType": "Advance",
          "multiAdd": "-1"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1356425425\">Cyrene_Ability02_Bonus_Main</a>[<span class=\"descriptionNumberColor\">Bloom, Elysium of Beyond</span>]",
      "valuePerStack": {
        "MDF_OriginDamagePercentage": {
          "operator": "Variables[0] (0.24) || RETURN",
          "displayLines": "0.24",
          "constants": [],
          "variables": [
            0.24
          ]
        }
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}