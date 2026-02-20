const configAbility = {
  "fileName": "4032021_Monster_W4_FireProwler_IF_PassiveAbilityInitiate_Insert_LMin_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "silent": true,
      "toRemove": [
        "STAT_CTRL"
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1932074311\">Enemy_W4_FireProwler_IF_LockStance</a>"
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "scope": "TargetEntity",
      "variableName": "LMCountDown",
      "value": 0
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "scope": "TargetEntity",
      "variableName": "InsertFlag_LMin"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "scope": "TargetEntity",
      "variableName": "InsertFlag_LMout"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"920196339\">Enemy_W4_FireProwler_IF_Limit_EnvirEffect</a>"
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "set": 0
    },
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "MaxStance",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
      "warningType": "MaxToughness"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-557758203\">Enemy_W4_FireProwler_IF_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]",
      "valuePerStack": {
        "MDF_AttackAddedRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_351) || RETURN",
          "displayLines": "UnusedUnderThisBase_351",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_351"
          ]
        },
        "MDF_SpeedAddedRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_350) || RETURN",
          "displayLines": "UnusedUnderThisBase_350",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_350"
          ]
        },
        "MDF_LM_DamageStanceValue": {
          "operator": "Variables[0] (UnusedUnderThisBase_349) || RETURN",
          "displayLines": "UnusedUnderThisBase_349",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_349"
          ]
        }
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "AIFlag",
      "value": 1
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "SkillFlag",
      "value": 1
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"31704267\">Enemy_W4_FireProwler_IF_Limit_EffectBody</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-953008997\">Enemy_W4_FireProwler_IF_Endurance</a>"
    }
  ],
  "references": []
}