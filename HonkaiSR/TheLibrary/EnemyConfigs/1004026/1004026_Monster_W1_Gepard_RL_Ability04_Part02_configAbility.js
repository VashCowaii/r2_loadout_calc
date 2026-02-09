const configAbility = {
  "fileName": "1004026_Monster_W1_Gepard_RL_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-21174358\">MWMonster_W1_Gepard_Instance_DisableAction</a>"
    },
    "Ability Start",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_154) || RETURN",
          "displayLines": "UnusedUnderThisBase_154",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_154"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"352751855\">Monster_W1_Gepard_RL_DamageUP</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "valuePerStack": {
        "MDF_DamageAddedRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_152) || RETURN",
          "displayLines": "UnusedUnderThisBase_152",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_152"
          ]
        }
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}