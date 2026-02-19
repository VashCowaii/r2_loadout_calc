const configAbility = {
  "fileName": "3024022_Monster_W3_Sam_PassiveAbility_InsertSpecial",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "revertDefault": true
    },
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "silent": true
    },
    {
      "name": "Update Displayed Energy Bar",
      "entityClass": "Enemy",
      "assignState": "False"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "InsertCheck",
      "value": 0
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-642289168\">Monster_W3_Sam_EnhanceEffectPart</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1797892283\">Monster_W3_Sam_BurningBP</a>[<span class=\"descriptionNumberColor\">Molten Core</span>]"
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
      "name": "Define Custom Variable with Skill Point Max",
      "variableName": "MaxBP"
    },
    {
      "name": "Skill Points Modification",
      "adjustmentValue": {
        "operator": "Variables[0] (MaxBP) || RETURN",
        "displayLines": "MaxBP",
        "constants": [],
        "variables": [
          "MaxBP"
        ]
      },
      "adjustmentType": "+"
    },
    {
      "name": "Set SkillPoint Mechanic",
      "modifierNameRemoved": "<a class=\"gModGreen\" id=\"909865518\">Monster_W3_Sam_UseBurningBP</a>",
      "isRemove": true
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "multiBase": 0
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-557060605\">Monster_W3_Sam_Endurance</a>"
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
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 3024022,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "Stellaron Hunter: Sam",
        "isBaseCompare": true
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-613973055\">Monster_W3_Sam_PartController</a>"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1457316398\">Monster_W3_Sam_WeakPointProtected</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
    }
  ],
  "references": []
}