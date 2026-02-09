const configAbility = {
  "fileName": "8003020_Monster_XP_Elite01_Ability09_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Shot Fired",
      "execute": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-829438264\">Monster_XP_Elite01_Ability08_FireBall</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_38) || Variables[1] (UnusedUnderThisBase_158) || Variables[2] (UnusedUnderThisBase_159) || MUL || ADD || RETURN",
              "displayLines": "(UnusedUnderThisBase_38 + (UnusedUnderThisBase_158 * UnusedUnderThisBase_159))",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_38",
                "UnusedUnderThisBase_158",
                "UnusedUnderThisBase_159"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
            "displayLines": "{[Skill05[2]]}",
            "constants": [],
            "variables": [
              "{[Skill05[2]]}"
            ]
          },
          "baseChance": 1,
          "valuePerStack": {
            "MDF_DamagePercentage_Layer": {
              "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
              "displayLines": "{[Skill05[3]]}",
              "constants": [],
              "variables": [
                "{[Skill05[3]]}"
              ]
            }
          }
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}