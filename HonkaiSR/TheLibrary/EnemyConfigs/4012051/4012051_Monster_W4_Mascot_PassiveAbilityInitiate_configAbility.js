const configAbility = {
  "fileName": "4012051_Monster_W4_Mascot_PassiveAbilityInitiate",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"407991733\">Enemy_W4_Mascot_ListenCorrectInteract</a>",
      "valuePerStack": {
        "MDF_SuccessDamageRatio": {
          "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
          "displayLines": "{[SkillP01[0]]}",
          "constants": [],
          "variables": [
            "{[SkillP01[0]]}"
          ]
        }
      }
    }
  ],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1842024628\">Enemy_W4_Mascot_EnterBattle</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1549112384\">Enemy_W4_Mascot_DeathRattle</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-348410444\">Enemy_W4_Mascot_MuteBreak</a>",
      "valuePerStack": {
        "MDF_AllDamageReduce": {
          "operator": "Variables[0] (UnusedUnderThisBase_238) || RETURN",
          "displayLines": "UnusedUnderThisBase_238",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_238"
          ]
        }
      }
    }
  ],
  "references": []
}