const configAbility = {
  "fileName": "Firefly_BE_BattleEvents",
  "abilityType": "Char. B.Events",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Battle Event Construction",
      "beID": 113101,
      "team": "Player Team",
      "eventType": "Assist",
      "barType": 1,
      "icon": "BattleEvent_1312_02_A.png",
      "abilityList": [
        "Advanced_Sam_PassiveAbility01_BattleEvent"
      ],
      "statOverrides": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
          "value": 100
        }
      ],
      "hardLevel": true,
      "actionDescription": "While SAM is in the Complete Combustion state, gains Enhanced Basic ATK and Enhanced Skill. Increases this unit's SPD, Weakness Break Efficiency, and the Break DMG taken by enemy targets, lasting until the Complete Combustion countdown turn begins."
    }
  ],
  "references": []
}