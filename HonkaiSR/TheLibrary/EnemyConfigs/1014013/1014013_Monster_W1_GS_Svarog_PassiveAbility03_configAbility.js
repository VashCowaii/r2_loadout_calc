const configAbility = {
  "fileName": "1014013_Monster_W1_GS_Svarog_PassiveAbility03",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Create Enemies",
      "delayPercent": 0,
      "refreshPositions": false,
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": 9004021,
          "locationType": "BeforeCaster"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "Svarog_Part_ListenHP_Modifier",
      "valuePerStack": {
        "PassiveAbility02_P2_HPRatio": {
          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__35) || RETURN",
          "displayLines": "ENEMIES_OBJECT_UNUSED__35",
          "constants": [],
          "variables": [
            "ENEMIES_OBJECT_UNUSED__35"
          ]
        }
      }
    }
  ],
  "references": []
}